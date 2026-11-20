import { copy, news, site, usingExample } from '../../lib/data';
import { marked } from 'marked';
const xml = (value: string) => value.replace(/[<>&"']/g, char => ({'<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&apos;'}[char]!));
export function GET() {
  const items = news.map((item, i) => `<item><title>${xml(item.text)}</title><description>${xml(marked.parseInline(item.text) as string)}</description><category>${xml(item.category)}</category><link>https://hj-ailab.github.io/news/</link><guid isPermaLink="false">hj-ailab:${item.date}:${i}:${xml(item.text)}</guid>${usingExample ? '' : `<pubDate>${new Date(`${item.date}-01T00:00:00Z`).toUTCString()}</pubDate>`}</item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${xml(site.name)} — News</title><link>https://hj-ailab.github.io/news/</link><description>${xml(copy.footer.blurb)}</description><language>en</language><atom:link href="https://hj-ailab.github.io/news/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, {headers: {'Content-Type':'application/rss+xml; charset=utf-8'}});
}
