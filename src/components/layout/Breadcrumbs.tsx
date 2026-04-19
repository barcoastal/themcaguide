import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://themcaguide.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="overflow-x-auto"
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "var(--ink-mute)",
          marginBottom: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <ol className="flex items-center gap-3 whitespace-nowrap">
          <li>
            <Link href="/" style={{ color: "var(--ink-mute)", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span aria-hidden="true" style={{ color: "var(--rule)" }}>
                /
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="truncate"
                  style={{ color: "var(--ink-mute)", textDecoration: "none", maxWidth: "200px" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="truncate"
                  style={{ color: "var(--ink)", maxWidth: "200px", fontWeight: 600 }}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
