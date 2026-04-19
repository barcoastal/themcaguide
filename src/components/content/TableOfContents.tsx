"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("article h2, article h3");
    const items: TocItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsible top bar */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3"
          style={{
            background: "#fffdf8",
            border: "1px solid var(--ink)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--ink)",
          }}
        >
          In This Article
          <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <nav
            className="mt-2 p-4"
            style={{ background: "#fffdf8", border: "1px solid var(--ink)" }}
          >
            <ul className="space-y-2">
              {headings.map((h) => (
                <li key={h.id} style={h.level === 3 ? { marginLeft: "16px" } : undefined}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "15px",
                      color: "var(--ink-soft)",
                      textDecoration: "none",
                      display: "block",
                      padding: "4px 0",
                    }}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block sticky top-24 w-64 flex-shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "10.5px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "var(--ink-mute)",
            marginBottom: "14px",
            paddingBottom: "10px",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          In This Article
        </p>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    style={{
                      display: "block",
                      padding: "7px 0 7px 12px",
                      paddingLeft: h.level === 3 ? "28px" : "12px",
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "14.5px",
                      lineHeight: 1.35,
                      textDecoration: "none",
                      borderLeft: "2px solid",
                      borderLeftColor: isActive ? "var(--red)" : "var(--rule-soft)",
                      color: isActive ? "var(--red)" : "var(--ink-soft)",
                      fontWeight: isActive ? 600 : 400,
                      fontStyle: h.level === 3 ? "italic" : "normal",
                    }}
                  >
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
