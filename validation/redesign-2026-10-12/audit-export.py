from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import xml.etree.ElementTree as ET,json
root=Path('out');redirects={}
for line in Path('public/_redirects').read_text().splitlines():
 if line.startswith('/'):
  a,b,*_=line.split();redirects[a]=b
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.canonical=[];self.robots=[];self.h1=0
 def handle_starttag(self,t,a):
  a=dict(a)
  if a.get('id'):self.ids.add(a['id'])
  if t=='a' and a.get('href'):self.links.append(a['href'])
  if t=='h1':self.h1+=1
  if t=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if t=='meta' and a.get('name')=='robots':self.robots.append(a.get('content'))
pages={}
for f in root.rglob('*.html'):
 rel=f.relative_to(root).as_posix()
 if rel.startswith('_next/'):continue
 url='/' if rel=='index.html' else '/'+rel.removesuffix('.html')
 page=Page();page.feed(f.read_text());pages[url]=page
errors=[];broken={};redirect_links={}
for url,page in pages.items():
 if url in ['/404','/_not-found'] or url.startswith('/google'):continue
 if len(page.canonical)!=1:errors.append([url,'canonical count',page.canonical])
 if page.h1!=1:errors.append([url,'h1 count',page.h1])
 for link in page.links:
  u=urlsplit(link)
  if u.netloc and u.netloc!='themcaguide.com':continue
  if not u.path.startswith('/') and not link.startswith('#'):continue
  target=unquote(u.path or url).rstrip('/') or '/'
  if target in redirects:redirect_links.setdefault(target,set()).add(url);continue
  if target not in pages and not (root/target.lstrip('/')).exists():broken.setdefault(target,set()).add(url)
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
sm=ET.parse(root/'sitemap-0.xml');urls=[e.text for e in sm.findall('.//s:loc',ns)]
for u in urls:
 p=urlsplit(u).path.rstrip('/') or '/'
 if p in redirects or p not in pages:errors.append([p,'invalid sitemap entry'])
 for r in pages.get(p,Page()).robots:
  if 'noindex' in r:errors.append([p,'noindex in sitemap'])
for source,target in redirects.items():
 u=urlsplit(target)
 if u.path not in pages:errors.append([source,'redirect target missing',target])
 elif u.fragment and u.fragment not in pages[u.path].ids:errors.append([source,'redirect anchor missing',target])
 if source in pages:errors.append([source,'redirect shadowed by exported HTML'])
report={'pages':len(pages),'sitemap_urls':len(urls),'redirects':len(redirects),'errors':errors,'broken_links':{k:sorted(v) for k,v in broken.items()},'redirect_links':{k:sorted(v) for k,v in redirect_links.items()}}
Path('validation/redesign-2026-10-12/export-audit.json').write_text(json.dumps(report,indent=2))
print(json.dumps({'pages':len(pages),'sitemap_urls':len(urls),'errors':errors,'broken_links':report['broken_links'],'redirect_link_targets':len(redirect_links)},indent=2))
