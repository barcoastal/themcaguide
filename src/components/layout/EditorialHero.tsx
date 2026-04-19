interface EditorialHeroProps {
  kicker?: string;
  title: string;
  dek?: string;
  byline?: string;
  align?: "left" | "center";
  maxWidth?: number;
}

export default function EditorialHero({
  kicker,
  title,
  dek,
  byline,
  align = "left",
  maxWidth = 900,
}: EditorialHeroProps) {
  const isCenter = align === "center";
  return (
    <section
      style={{
        borderBottom: "3px double var(--ink)",
        padding: "56px 0 44px",
        background: "transparent",
        textAlign: isCenter ? "center" : "left",
      }}
    >
      <div
        style={{
          maxWidth: `${maxWidth}px`,
          margin: isCenter ? "0 auto" : undefined,
          paddingLeft: "24px",
          paddingRight: "24px",
          marginLeft: isCenter ? "auto" : "auto",
          marginRight: isCenter ? "auto" : "auto",
        }}
      >
        {kicker && (
          <div
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "var(--red)",
              marginBottom: "18px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: isCenter ? "center" : "flex-start",
            }}
          >
            {!isCenter && (
              <span style={{ width: "28px", height: "1px", background: "var(--red)" }} />
            )}
            {kicker}
            {!isCenter && (
              <span style={{ width: "28px", height: "1px", background: "var(--red)" }} />
            )}
          </div>
        )}
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Times New Roman', serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 6vw, 84px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            margin: 0,
            maxWidth: "20ch",
            marginLeft: isCenter ? "auto" : undefined,
            marginRight: isCenter ? "auto" : undefined,
          }}
        >
          {title}
        </h1>
        {dek && (
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontSize: "22px",
              lineHeight: 1.45,
              color: "var(--ink-soft)",
              maxWidth: "780px",
              margin: "22px 0 0",
              marginLeft: isCenter ? "auto" : undefined,
              marginRight: isCenter ? "auto" : undefined,
            }}
          >
            {dek}
          </p>
        )}
        {byline && (
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              marginTop: "28px",
              paddingTop: "14px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--ink-mute)",
            }}
          >
            {byline}
          </div>
        )}
      </div>
    </section>
  );
}
