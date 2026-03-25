import Link from "next/link";

const pillars = [
  { href: "/guides/what-is-mca", icon: "💡", title: "What is an MCA?", description: "Plain English explanation of how merchant cash advances work." },
  { href: "/guides/mca-vs-business-loans", icon: "⚖️", title: "MCA vs Real Loans", description: "See the difference between MCAs and actual business loans." },
  { href: "/guides/mca-debt-settlement", icon: "🤝", title: "Settling MCA Debt", description: "Options if you're already stuck with MCA payments." },
  { href: "/guides/mca-alternatives", icon: "🔄", title: "Better Alternatives", description: "Financing options that won't cost you an arm and a leg." },
  { href: "/guides/how-to-get-out-of-mca-debt", icon: "🚪", title: "Escape MCA Debt", description: "Step-by-step guide to getting out of the MCA cycle." },
];

export default function PillarCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Learn at Your Own Pace</h2>
        <p className="mt-3 text-lg text-gray-500">Pick a topic that matters to you right now</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <p className="text-4xl mb-4">{p.icon}</p>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
