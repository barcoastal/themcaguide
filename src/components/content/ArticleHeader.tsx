interface ArticleHeaderProps {
  title: string;
  description?: string;
  readingTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorImage?: string;
  pillarLabel?: string;
  pillarHref?: string;
  heroImage?: string;
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function ArticleHeader({
  title,
  description,
  readingTime,
  publishedAt,
  updatedAt,
  author,
  pillarLabel,
  pillarHref,
  heroImage,
}: ArticleHeaderProps) {
  return (
    <header
      className="not-prose"
      style={{
        borderBottom: "3px double var(--ink)",
        padding: "8px 0 32px",
        marginBottom: "40px",
      }}
    >
      {pillarLabel && pillarHref && (
        <a
          href={pillarHref}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--red)",
            textDecoration: "none",
            marginBottom: "18px",
            borderBottom: "1px solid var(--red)",
            paddingBottom: "2px",
          }}
        >
          ← {pillarLabel}
        </a>
      )}

      <h1
        style={{
          fontFamily: "var(--font-playfair), 'Times New Roman', serif",
          fontWeight: 900,
          fontSize: "clamp(40px, 5.5vw, 72px)",
          lineHeight: 0.97,
          letterSpacing: "-0.028em",
          color: "var(--ink)",
          margin: "12px 0 18px",
          maxWidth: "20ch",
        }}
      >
        {title}
      </h1>

      {description && (
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontStyle: "italic",
            fontSize: "22px",
            lineHeight: 1.4,
            color: "var(--ink-soft)",
            maxWidth: "780px",
            margin: "0 0 24px",
          }}
        >
          {description}
        </p>
      )}

      {heroImage && (
        <div
          style={{
            border: "1px solid var(--ink)",
            boxShadow: "6px 6px 0 var(--rule-soft)",
            marginBottom: "28px",
            background: "#fffdf8",
          }}
        >
          <img
            src={heroImage}
            alt={title}
            style={{
              display: "block",
              width: "100%",
              maxHeight: "380px",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
          paddingTop: "16px",
          borderTop: "1px solid var(--rule)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "var(--ink-mute)",
        }}
      >
        <span>
          <span style={{ color: "var(--ink-mute)" }}>By </span>
          <span style={{ color: "var(--ink)", fontWeight: 600 }}>{author}</span>
        </span>
        <span>{readingTime}</span>
        <span>
          Published {fmtDate(publishedAt)}
          {updatedAt && ` · Updated ${fmtDate(updatedAt)}`}
        </span>
      </div>
    </header>
  );
}
