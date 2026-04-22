import Link from "next/link";

interface Article {
  slug: string;
  readingTime: string;
  frontmatter: {
    title: string;
    description: string;
    heroImage?: string;
    tags?: string[];
  };
}

interface EditorialArticleStackProps {
  articles: Article[];
  kicker?: string;
}

export default function EditorialArticleStack({
  articles,
  kicker = "Latest Reporting",
}: EditorialArticleStackProps) {
  if (articles.length === 0) return null;

  const [lead, ...rest] = articles;
  const sides = rest.slice(0, 2);
  const grid = rest.slice(2);

  return (
    <section
      style={{
        padding: "48px 0 60px",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Kicker + section title */}
      <div style={{ marginBottom: "30px", paddingBottom: "16px", borderBottom: "1px solid var(--rule)" }}>
        <div
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "var(--red)",
            marginBottom: "8px",
          }}
        >
          {kicker}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Times New Roman', serif",
            fontSize: "36px",
            fontWeight: 900,
            margin: 0,
            color: "var(--ink)",
          }}
        >
          From the Editor&apos;s Desk
        </h2>
      </div>

      {/* Lead + 2 side stories */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "40px",
          marginBottom: "50px",
        }}
        className="editorial-stack-top"
      >
        {/* LEAD STORY */}
        <article>
          <Link href={`/articles/${lead.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            {lead.frontmatter.heroImage && (
              <div style={{ border: "1px solid var(--ink)", marginBottom: "18px", background: "#fffdf8" }}>
                <img
                  src={lead.frontmatter.heroImage}
                  alt={lead.frontmatter.title}
                  width={800}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  style={{ display: "block", width: "100%", maxHeight: "320px", objectFit: "cover" }}
                />
              </div>
            )}
            <div
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "10.5px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "var(--red)",
                marginBottom: "10px",
              }}
            >
              Feature · {lead.readingTime}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Times New Roman', serif",
                fontSize: "40px",
                fontWeight: 900,
                lineHeight: 1.02,
                color: "var(--ink)",
                margin: "0 0 14px",
              }}
            >
              {lead.frontmatter.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontStyle: "italic",
                fontSize: "18px",
                lineHeight: 1.4,
                color: "var(--ink-soft)",
                marginBottom: 0,
              }}
            >
              {lead.frontmatter.description}
            </p>
          </Link>
        </article>

        {/* SIDE STORIES */}
        {sides.map((article, i) => (
          <article
            key={article.slug}
            style={{
              borderLeft: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule)",
              paddingLeft: "28px",
            }}
          >
            <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--red)",
                  marginBottom: "8px",
                }}
              >
                {article.frontmatter.tags?.[0] || "Reporting"}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-playfair), 'Times New Roman', serif",
                  fontSize: "22px",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "var(--ink)",
                  margin: "0 0 10px",
                }}
              >
                {article.frontmatter.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
              >
                {article.frontmatter.description}
              </p>
              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "10px",
                  borderTop: "1px solid var(--rule)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "10.5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--ink-mute)",
                }}
              >
                {article.readingTime}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Grid of remaining stories */}
      {grid.length > 0 && (
        <>
          <div style={{ borderTop: "3px double var(--ink)", paddingTop: "30px", marginBottom: "24px" }}>
            <div
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: "var(--ink-mute)",
              }}
            >
              More on this Section · {grid.length} stories
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px 32px",
            }}
            className="editorial-stack-grid"
          >
            {grid.map((article) => (
              <article
                key={article.slug}
                style={{ paddingBottom: "20px", borderBottom: "1px solid var(--rule)" }}
              >
                <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "var(--red)",
                      marginBottom: "8px",
                    }}
                  >
                    {article.frontmatter.tags?.[0] || "Reporting"}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-playfair), 'Times New Roman', serif",
                      fontSize: "20px",
                      fontWeight: 800,
                      lineHeight: 1.15,
                      color: "var(--ink)",
                      margin: "0 0 8px",
                    }}
                  >
                    {article.frontmatter.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--ink-soft)",
                      margin: "0 0 10px",
                    }}
                  >
                    {article.frontmatter.description}
                  </p>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "10.5px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "var(--ink-mute)",
                    }}
                  >
                    {article.readingTime}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
