interface EditorialHeroProps { kicker?: string; title: string; dek?: string; byline?: string; align?: "left" | "center"; maxWidth?: number; }
export default function EditorialHero({ kicker, title, dek, byline, align = "left", maxWidth = 1000 }: EditorialHeroProps) {
  return <section className={`page-hero ${align === "center" ? "page-hero-center" : ""}`}><div style={{maxWidth, margin: align === "center" ? "auto" : undefined}}>{kicker && <p className="eyebrow">{kicker}</p>}<h1>{title}</h1>{dek && <p className="page-dek">{dek}</p>}{byline && <p className="article-meta">{byline}</p>}</div></section>;
}
