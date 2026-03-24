import Link from "next/link";

const pillars = [
  { href: "/guides/what-is-mca", title: "What is an MCA?", description: "Understand how merchant cash advances work, costs, and who they are for." },
  { href: "/guides/mca-vs-business-loans", title: "MCA vs Business Loans", description: "Compare MCAs to traditional business loans, SBA loans, and lines of credit." },
  { href: "/guides/mca-debt-settlement", title: "MCA Debt Settlement", description: "Learn how to negotiate and settle MCA debt when payments become unmanageable." },
  { href: "/guides/mca-alternatives", title: "MCA Alternatives", description: "Explore better financing options including SBA loans, invoice factoring, and more." },
  { href: "/guides/how-to-get-out-of-mca-debt", title: "Get Out of MCA Debt", description: "A step-by-step guide to escaping the MCA debt cycle and rebuilding." },
];

export default function PillarCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <Link key={p.href} href={p.href} className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
