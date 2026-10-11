import {readdirSync,readFileSync} from 'node:fs';
import matter from 'gray-matter';
const redirects=new Set(readFileSync('public/_redirects','utf8').split('\n').filter(l=>l.startsWith('/')).map(l=>l.trim().split(/\s+/)[0]));
const failures=[]; let count=0,revised=0;
for(const kind of ['articles','guides']) for(const name of readdirSync(`content/${kind}`)){
 if(!name.endsWith('.mdx')||redirects.has(`/${kind}/${name.slice(0,-4)}`))continue;
 const file=`content/${kind}/${name}`;const {data,content}=matter(readFileSync(file,'utf8'));count++;
 for(const key of ['title','description','publishedAt','author'])if(!data[key])failures.push(`${file}: missing ${key}`);
 for(const key of ['publishedAt','updatedAt'])if(data[key]&&!Number.isFinite(Date.parse(data[key])))failures.push(`${file}: invalid ${key}`);
 if(data.updatedAt&&data.updatedAt<data.publishedAt)failures.push(`${file}: update precedes publication`);
 if(data.revisionNote){
  revised++;
  if(!/https:\/\/[^\s)"<>]+\.(gov|edu)\//.test(content))failures.push(`${file}: revised guide needs an authoritative source`);
  if(!/<KeyTakeaways/.test(content))failures.push(`${file}: missing takeaway summary`);
  const links=content.match(/\]\(\/(?:articles|guides|tools|templates)\//g)||[];
  if(links.length<3)failures.push(`${file}: insufficient next-step links`);
  if(!data.updatedAt)failures.push(`${file}: revision note needs an update date`);
 }
}
// Word count is not a quality requirement. Validate evidence and usable metadata.
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`Content checks passed: ${count} published documents, ${revised} substantively revised with sources and takeaways.`);
