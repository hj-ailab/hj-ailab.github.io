import type { Publication } from './data';

const escape = (value: string) => value.replace(/[\\{}%&_#$]/g, char => char === '\\' ? '{\\textbackslash}' : `\\${char}`);
export function bibtex(paper: Publication) {
  const arxiv = paper.venue === 'arXiv';
  const venue = arxiv ? `arXiv preprint arXiv:${paper.paper.split('/abs/')[1]}` : paper.venue;
  const authors = paper.authors.split(',').map(name => name.trim().replace(/\*$/, '')).join(' and ');
  return `@${arxiv ? 'article' : 'inproceedings'}{${paper.id},\n  title = {${escape(paper.title)}},\n  author = {${escape(authors)}},\n  ${arxiv ? 'journal' : 'booktitle'} = {${escape(venue)}},\n  year = {${paper.year}},\n  url = {${paper.paper}}\n}`;
}
