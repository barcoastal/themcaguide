import Link from "next/link";
interface ArticleHeaderProps { title: string; description?: string; readingTime: string; publishedAt: string; updatedAt?: string; author: string; authorImage?: string; pillarLabel?: string; pillarHref?: string; heroImage?: string; }
const date = (s: string) => new Date(s).toLocaleDateString("en-US", {month:"long", day:"numeric",year:"numeric",timeZone:"UTC"});
export default function ArticleHeader({title,description,readingTime,publishedAt,updatedAt,author,pillarLabel,pillarHref}: ArticleHeaderProps) {
  return <header className="not-prose article-heading">{pillarLabel && pillarHref && <Link className="eyebrow" href={pillarHref}>{pillarLabel} ↗</Link>}<h1>{title}</h1>{description && <p className="page-dek">{description}</p>}<div className="article-meta"><Link href="/about/bar-alezrah">By {author}</Link><span>{readingTime}</span><span>{updatedAt ? "Updated" : "Published"} {date(updatedAt || publishedAt)}</span></div></header>;
}
