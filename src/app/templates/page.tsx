import Link from "next/link";
import type { Metadata } from "next";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Free MCA Debt Templates: Hardship Letters, Settlement Letters, COJ Response",
  description: "Free copy-and-customize templates for MCA debt situations: hardship letters, settlement offers, and COJ defense responses. No signup required.",
  alternates: { canonical: "https://themcaguide.com/templates" },
};

const TEMPLATES = [
  {
    slug: "mca-hardship-letter",
    title: "MCA Hardship Letter Template",
    description: "Request reduced daily or weekly payments before you default. Plain language, customizable, with guidance on what to attach.",
  },
  {
    slug: "mca-settlement-letter",
    title: "MCA Settlement Letter Template",
    description: "Formal settlement offer for negotiating a reduced lump sum payoff. Includes negotiation framing and documentation requests.",
  },
  {
    slug: "mca-coj-defense-response",
    title: "MCA COJ Defense Response Template (NY CPLR 5015)",
    description: "Motion-to-vacate outline for defending against a pre-2019 Confession of Judgment entered in New York. Educational only, not legal advice.",
  },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <EditorialHero
        kicker="Free Templates"
        title="Free MCA Debt Templates"
        dek="Copy-and-customize templates for common MCA debt situations. Written in plain language, no signup required."
      />
      <div className="py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {TEMPLATES.map(t => (
          <Link key={t.slug} href={`/templates/${t.slug}`} className="block rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-blue-400 hover:shadow-md transition">
            <h2 className="text-lg font-bold text-slate-900 mb-2">{t.title}</h2>
            <p className="text-sm text-slate-700 mb-4">{t.description}</p>
            <span className="text-sm text-blue-700 font-medium">Use template &rarr;</span>
          </Link>
        ))}
      </div>
      <div className="mt-12 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
        <h3 className="text-base font-bold text-slate-900 mb-2">Important</h3>
        <p className="text-sm text-slate-800 m-0">These templates are educational. They are not legal advice and do not create an attorney-client relationship. If you have been served with a lawsuit, have been threatened with bank account freeze, or are in immediate default, consult an attorney before sending anything. See our <Link href="/guides/mca-attorney-complete-guide" className="underline">MCA Attorney Complete Guide</Link>.</p>
      </div>
      </div>
    </div>
  );
}
