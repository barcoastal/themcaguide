interface Citation {
  label: string;
  href: string;
  source: string;
}

interface AuthorityCitationsProps {
  items: Citation[];
  title?: string;
}

export default function AuthorityCitations({ items, title = "Sources" }: AuthorityCitationsProps) {
  return (
    <div className="not-prose my-10 border-l-4 border-slate-400 bg-slate-50 p-5 rounded-r-lg">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 mb-3">{title}</h3>
      <ol className="space-y-2 text-sm text-slate-800 list-decimal list-inside">
        {items.map((c, i) => (
          <li key={i}>
            <a href={c.href} target="_blank" rel="noopener" className="text-blue-700 underline">
              {c.label}
            </a>
            <span className="text-slate-600 ml-2">— {c.source}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
