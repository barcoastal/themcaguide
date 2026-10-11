/* eslint-disable @typescript-eslint/no-require-imports -- next-sitemap loads this CommonJS configuration. */
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const matter = require('gray-matter');
const redirects = new Set(fs.readFileSync('public/_redirects','utf8').split('\n').filter(l=>l.startsWith('/')).map(l=>l.trim().split(/\s+/)[0]));
const updatedStatic = new Set(['/', '/guides', '/mca-laws-by-state', '/editorial-policy', '/how-we-make-money', '/tools/mca-calculator', '/tools/factor-rate-to-apr', '/blog/choosing-mca']);
function lastModified(urlPath) {
  const match = urlPath.match(/^\/(articles|guides)\/([^/]+)$/);
  if (match) {
    const file=path.join('content',match[1],match[2]+'.mdx');
    if(fs.existsSync(file)){const {data}=matter(fs.readFileSync(file,'utf8'));return data.updatedAt || data.publishedAt;}
  }
  if(updatedStatic.has(urlPath))return '2026-10-12';
  const file=path.join('src/app',urlPath==='/'?'':urlPath,'page.tsx');
  try {return execFileSync('git',['log','-1','--format=%cs','--',file],{encoding:'utf8'}).trim() || undefined;} catch {return undefined;}
}
/** @type {import('next-sitemap').IConfig} */
module.exports={siteUrl:'https://themcaguide.com',outDir:'out',generateRobotsTxt:true,trailingSlash:false,sitemapSize:7000,exclude:['/articles/test-article','/icon.png','/icon',...redirects],autoLastmod:false,
 robotsTxtOptions:{policies:[{userAgent:'*',allow:'/'}]},
 transform:async(config,urlPath)=>redirects.has(urlPath)?null:{loc:urlPath,lastmod:lastModified(urlPath)},
};
