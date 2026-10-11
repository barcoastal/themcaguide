import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {getAllArticles} from "@/lib/content";
import EditorialHero from "@/components/layout/EditorialHero";
export const metadata:Metadata={title:"MCA Guides: Costs, Alternatives, and Repayment",description:"Practical guides to merchant cash advance costs, financing alternatives, settlement, and legal help. Worked examples, source links, and clear next steps.",alternates:{canonical:"https://themcaguide.com/guides"}};
const order=["what-is-mca","mca-alternatives","mca-vs-business-loans","mca-debt-relief-2026-guide","mca-debt-settlement","mca-attorney-complete-guide"];
export default function Page(){const guides=getAllArticles("guide").sort((a,b)=>order.indexOf(a.slug)-order.indexOf(b.slug));return <div className="site-wrap"><EditorialHero kicker="THE ESSENTIAL GUIDES" title="Get clear on your next move." dek="Start with the question in front of you. Each core guide combines practical checks, worked examples where useful, and links to the source."/><div className="guide-index">{guides.map((g,i)=><Link href={`/guides/${g.slug}`} key={g.slug}><span className="eyebrow">GUIDE {String(i+1).padStart(2,'0')} / {g.readingTime}</span><h2>{g.frontmatter.title}</h2><p>{g.frontmatter.description}</p><span className="card-link">Read the guide <ArrowUpRight size={20}/></span></Link>)}</div></div>}
