import Link from "next/link";

interface EditorialSidebarProps {
  readingTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags?: string[];
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function EditorialSidebar({
  readingTime,
  publishedAt,
  updatedAt,
  author,
  tags,
}: EditorialSidebarProps) {
  return (
    <aside
      className="hidden xl:block sticky top-24 w-64 flex-shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto not-prose"
      style={{ paddingLeft: "28px", borderLeft: "1px solid var(--rule)" }}
    >
      {/* Datacard 1 — Publication */}
      <div
        style={{
          background: "#fffdf8",
          border: "1px solid var(--ink)",
          padding: "18px 20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--ink-mute)",
            marginBottom: "10px",
          }}
        >
          Publication
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "13.5px",
            lineHeight: 1.5,
            color: "var(--ink)",
          }}
        >
          <div style={{ marginBottom: "6px" }}>
            <strong style={{ color: "var(--ink)" }}>{author}</strong>
          </div>
          <div style={{ color: "var(--ink-soft)" }}>
            {readingTime}
          </div>
          <div
            style={{
              color: "var(--ink-mute)",
              marginTop: "8px",
              paddingTop: "8px",
              borderTop: "1px solid var(--rule)",
              fontSize: "12.5px",
            }}
          >
            Published {fmtDate(publishedAt)}
            {updatedAt && (
              <>
                <br />
                Updated {fmtDate(updatedAt)}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Datacard 2 — Editorial standards */}
      <div
        style={{
          background: "#fffdf8",
          border: "1px solid var(--ink)",
          padding: "18px 20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--ink-mute)",
            marginBottom: "10px",
          }}
        >
          Editorial Standards
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontStyle: "italic",
            fontSize: "13px",
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            margin: "0 0 12px",
          }}
        >
          Reported, sourced, and written for owners. Not for lenders.
        </p>
        <Link
          href="/editorial-policy"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "10.5px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--red)",
            textDecoration: "none",
            borderBottom: "1px solid var(--red)",
            paddingBottom: "1px",
          }}
        >
          Read our policy →
        </Link>
      </div>

      {/* Datacard 3 — Tags */}
      {tags && tags.length > 0 && (
        <div
          style={{
            background: "transparent",
            padding: "0",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--ink-mute)",
              marginBottom: "10px",
              paddingBottom: "6px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Filed Under
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tags.slice(0, 6).map((tag) => (
              <li key={tag} style={{ marginBottom: "6px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "13.5px",
                    color: "var(--ink-soft)",
                  }}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Datacard 4 — Tool CTA */}
      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#f5c16b",
            marginBottom: "10px",
          }}
        >
          Run The Numbers
        </div>
        <div
          style={{
            fontFamily: "var(--font-playfair), 'Times New Roman', serif",
            fontSize: "20px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "var(--paper)",
            marginBottom: "12px",
          }}
        >
          MCA Cost Calculator
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "13px",
            lineHeight: 1.5,
            color: "#d3cdbe",
            margin: "0 0 14px",
          }}
        >
          Factor rate, holdback, term. See the true APR before you sign.
        </p>
        <Link
          href="/tools/mca-calculator"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--paper)",
            textDecoration: "none",
            borderBottom: "1px solid var(--paper)",
            paddingBottom: "2px",
          }}
        >
          Open calculator →
        </Link>
      </div>
    </aside>
  );
}
