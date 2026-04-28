import Link from "next/link";

type Variant = "diy-first" | "attorney-first" | "review-roundup" | "collection-default";

const VARIANTS: Record<Variant, { heading: string; intro: string; options: Array<{ label: string; body: string; href: string }> }> = {
  "diy-first": {
    heading: "Your next step",
    intro: "If you're dealing with MCA debt, these are the three paths that actually work. Start with the cheapest option that fits your situation.",
    options: [
      { label: "DIY negotiation", body: "Free and the most common starting point. Use our negotiation playbook first.", href: "/articles/can-you-negotiate-mca-debt" },
      { label: "MCA debt relief company", body: "Paid service that handles negotiation for you. See our side-by-side comparison. Our disclosure: we work with Coastal Debt Resolve, details on /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "MCA attorney", body: "Needed when lawsuits are filed or contracts are legally defective. See the attorney guide.", href: "/guides/mca-attorney-complete-guide" },
    ],
  },
  "attorney-first": {
    heading: "Your next step",
    intro: "Lawsuits have deadlines. If you've been served, act in days not weeks. Here are the three paths, ordered by urgency for your situation.",
    options: [
      { label: "Talk to an MCA attorney", body: "If you've been served with a lawsuit or COJ, this is the first call. See what an MCA attorney does and what it costs.", href: "/guides/mca-attorney-complete-guide" },
      { label: "MCA debt relief company", body: "If no lawsuit has been filed yet, a debt relief company can often settle before litigation. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "DIY negotiation", body: "Works best before default. Full playbook here.", href: "/articles/can-you-negotiate-mca-debt" },
    ],
  },
  "review-roundup": {
    heading: "How to evaluate any MCA debt relief company",
    intro: "Names matter less than process. These six criteria matter more than any star rating.",
    options: [
      { label: "Compare the top options", body: "Our full side-by-side of debt relief companies. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "Read the evaluation checklist", body: "Six things to verify before signing any debt relief agreement.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "Try DIY first", body: "Most small MCA debts can be settled without paying a company. Start here.", href: "/articles/can-you-negotiate-mca-debt" },
    ],
  },
  "collection-default": {
    heading: "Your next step",
    intro: "Collection calls and default are scary. Free options exist. Start with those before paying anyone.",
    options: [
      { label: "Know your rights", body: "What an MCA debt collector can and cannot legally do.", href: "/articles/mca-debt-collection-rules-rights" },
      { label: "DIY negotiation", body: "Free playbook that works before the lawsuit stage.", href: "/articles/can-you-negotiate-mca-debt" },
      { label: "Get a professional evaluation", body: "If the debt is too big to DIY, compare debt relief options. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
    ],
  },
};

interface EditorialCTAProps {
  variant?: Variant;
}

export default function EditorialCTA({ variant = "diy-first" }: EditorialCTAProps) {
  const { heading, intro, options } = VARIANTS[variant];
  return (
    <div className="not-prose my-12 rounded-2xl border-2 border-slate-200 p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{heading}</h3>
      <p className="text-slate-700 mb-6">{intro}</p>
      <ul className="space-y-4">
        {options.map((opt) => (
          <li key={opt.label}>
            <Link href={opt.href} className="block rounded-xl bg-slate-50 hover:bg-blue-50 p-5 transition-colors">
              <strong className="block text-blue-900 text-lg">{opt.label}</strong>
              <span className="text-slate-700 text-sm block mt-1">{opt.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
