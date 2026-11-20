import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { z } from 'zod';

const text = z.string().trim().min(1);
const memberId = z.enum(['hyunjong', 'suho']);
const topic = z.enum(['evaluation', 'efficiency', 'understanding']);
const url = z.string().url();
const read = (file: string) => parse(readFileSync(resolve(file), 'utf8'));
const validate = <T>(file: string, schema: z.ZodType<T>): T => {
  const result = schema.safeParse(read(file));
  if (!result.success) {
    throw new Error(`${file}\n${result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join('\n')}`);
  }
  return result.data;
};
const unique = <T extends { id: string }>(items: T[]) => new Set(items.map(item => item.id)).size === items.length;

export const site = validate('src/data/site.yaml', z.object({
  name: text, github: url,
  founded: z.number().int().min(1900).max(2100),
  top_tier_venues: z.array(text).min(1).refine(venues => new Set(venues).size === venues.length, 'Duplicate top-tier venue'),
  business: z.object({enabled: z.boolean(), name: z.string(), representative: z.string(), registration_no: z.string(), address: z.string()})
    .refine(b => !b.enabled || [b.name, b.representative, b.registration_no, b.address].every(v => v.trim()), 'Enabled business requires all fields'),
}));
const facts = validate('src/data/people.yaml', z.array(z.object({
  id: memberId, name: text, name_local: text.optional(), website: url, scholar: url,
  github: url, email: z.string().email(), photo: z.string().nullable(), initials: text,
})).length(2).refine(unique, 'Duplicate person id'));
export const usingExample = !existsSync(resolve('content/copy.yaml'));
const copyFile = usingExample ? 'content/copy.example.yaml' : 'content/copy.yaml';
const date = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
export const honors = validate('src/data/honors.yaml', z.array(z.object({
  title: text, org: text, date, member: memberId,
  kind: z.enum(['fellowship', 'scholarship', 'award', 'competition']),
  highlight: z.boolean().optional(), url: url.optional(),
}))).sort((a, b) => b.date.localeCompare(a.date));
export const service = validate('src/data/service.yaml', z.array(z.object({
  member: memberId, role: text, venues: z.array(text).min(1),
})));
const withFoundingYear = (value: string) => value.replace(/\b(founded in )\d{4}\b/gi, (_, phrase) => `${phrase}${site.founded}`);
const category = z.enum(['paper', 'release', 'talk', 'award', 'note', 'people']);
export const copy = validate(copyFile, z.object({
  lab: z.object({name: text, tagline: text, intro: text.transform(withFoundingYear), about: text.transform(withFoundingYear)}),
  themes: z.array(z.object({id: topic, title: text, bullet: text, summary: text})).length(3).refine(unique, 'Duplicate theme id'),
  people: z.array(z.object({id: memberId, role: text, affiliation: text, interests: z.array(text).min(1), bio: text})).length(2).refine(unique, 'Duplicate person id'),
  news: z.array(z.object({date: usingExample ? z.union([date, z.literal('TODO')]) : date, category: usingExample ? z.union([category, z.literal('TODO')]) : category, text})),
  contact: z.object({intro: text}), footer: z.object({blurb: text.transform(withFoundingYear)}),
}));
if (!usingExample && JSON.stringify(copy).includes('TODO')) throw new Error(`${copyFile}: unresolved TODO`);
export const people = facts.map(person => ({...person, ...copy.people.find(item => item.id === person.id)!}));
export const news = [...copy.news].sort((a, b) => b.date.localeCompare(a.date));
const publicationSchema = z.object({
  id: text.regex(/^[a-z0-9-]+$/), title: text, authors: text, venue: text,
  year: z.number().int().min(1900).max(2100), paper: url,
  note: text.nullable(), tags: z.array(z.enum(['speech', 'multimodal', 'llm', 'agents', 'evaluation', 'efficiency', 'interpretability'])).min(1),
  code: url.nullable(), project: url.nullable(), members: z.array(memberId).min(1),
  preprint: z.boolean(), topics: z.array(topic), type: z.enum(['preprint', 'conference']), selected: z.boolean(),
}).superRefine((paper, ctx) => {
  const actual = facts.filter(p => paper.authors.split(',').some(a => a.trim().replace(/\*$/, '') === p.name)).map(p => p.id).sort();
  if (JSON.stringify(actual) !== JSON.stringify([...paper.members].sort())) ctx.addIssue({code: 'custom', path: ['members'], message: 'Members must match lab authors'});
  if (paper.preprint !== (paper.type === 'preprint')) ctx.addIssue({code: 'custom', path: ['type'], message: 'Type must match preprint status'});
  if (paper.venue === 'arXiv' && !/arxiv\.org\/abs\/[\d.]+/.test(paper.paper)) ctx.addIssue({code: 'custom', path: ['paper'], message: 'arXiv venue requires an arXiv ID'});
});
export const publications = validate('src/data/publications.yaml', z.array(publicationSchema).min(1).refine(unique, 'Duplicate publication id')).sort((a,b) => b.year-a.year);
export type Publication = z.infer<typeof publicationSchema>;
export const isConferencePaper = (paper: Publication) => paper.type === 'conference' && paper.venue !== 'arXiv';
export const isTopTierPaper = (paper: Publication) => isConferencePaper(paper) && site.top_tier_venues.includes(paper.venue);
export type Person = (typeof people)[number];
export const years = [...new Set(publications.map(p => p.year))];
export const emailText = (email: string) => email.replace('@', ' at ');
