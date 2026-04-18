import Link from "next/link";
import { ShieldCheck, Search, LifeBuoy, ArrowRight } from "lucide-react";

/**
 * Homepage hero.
 *
 * Replaces the static hero illustration with an inline credibility proof —
 * a $50K cost-comparison card — and adds a trust ribbon, primary CTA to
 * the inline calculator, and step labels on the three pillar paths so the
 * journey reads more sequentially.
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-blue-800 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Independent · Not a lender or broker
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              From One Business Owner <span className="text-blue-800">to Another</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I created this guide so you don&apos;t make the same mistakes I&apos;ve seen too
              many business owners make. MCAs can cost you everything if you don&apos;t
              understand them. This site gives you all the tools and knowledge,{" "}
              <strong className="text-gray-900">for free</strong>.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              No sales pitches. No jargon. Just honest, independent education from someone
              who&apos;s been in your shoes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#mca-calculator"
                className="inline-flex items-center gap-2 bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-900 transition-colors"
              >
                Calculate your MCA cost
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/guides/what-is-mca"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-xl hover:border-blue-400 hover:text-blue-800 transition-colors"
              >
                Start with the basics
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <CostComparisonCard />
          </div>
        </div>

        {/* 3 Blog Paths */}
        <div className="mt-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Choose your path</h2>
            <p className="text-sm text-gray-500">Three starting points based on where you are</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PathCard
              href="/blog/before-mca"
              icon={<ShieldCheck className="w-6 h-6 text-green-700" />}
              label="Step 1"
              labelClass="text-green-700"
              iconBg="bg-green-100"
              border="border-green-200 hover:border-green-400"
              hoverText="group-hover:text-green-700"
              ctaClass="text-green-600"
              title="Before You Take an MCA"
              desc="Cheaper alternatives and how to fix your cash flow without an MCA"
              cta="Explore options →"
            />
            <PathCard
              href="/blog/choosing-mca"
              icon={<Search className="w-6 h-6 text-blue-700" />}
              label="Step 2"
              labelClass="text-blue-700"
              iconBg="bg-blue-100"
              border="border-blue-200 hover:border-blue-400"
              hoverText="group-hover:text-blue-700"
              ctaClass="text-blue-600"
              title="If You're Taking an MCA"
              desc="How to pick the best deal, spot red flags, and protect yourself"
              cta="Learn how →"
            />
            <PathCard
              href="/blog/getting-out"
              icon={<LifeBuoy className="w-6 h-6 text-red-700" />}
              label="Emergency"
              labelClass="text-red-700"
              iconBg="bg-red-100"
              border="border-red-200 hover:border-red-400"
              hoverText="group-hover:text-red-700"
              ctaClass="text-red-600"
              title="Stuck in MCA Debt"
              desc="Settlement, negotiation, legal options. Your way out"
              cta="Find help →"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CostComparisonCard() {
  const rows = [
    { name: "MCA", label: "$17,500 fees", pct: 100, color: "bg-red-500", textColor: "text-red-600" },
    { name: "Online lender", label: "$5,625", pct: 32, color: "bg-orange-500", textColor: "text-orange-600" },
    { name: "Line of credit", label: "$2,813", pct: 16, color: "bg-green-500", textColor: "text-green-600" },
    { name: "SBA loan", label: "$1,500", pct: 9, color: "bg-green-600", textColor: "text-green-700" },
  ];
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            $50K Advance, 1.35 factor
          </p>
          <p className="text-xs text-gray-400">9-month term</p>
        </div>
        <div className="space-y-3">
          {rows.map((r) => (
            <div key={r.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-gray-900">{r.name}</span>
                <span className={`font-bold ${r.textColor} tabular-nums`}>{r.label}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Same principal, same term</span>
          <Link href="#mca-calculator" className="text-blue-800 font-semibold hover:underline">
            Run your numbers →
          </Link>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
        THE REAL COST
      </div>
    </div>
  );
}

function PathCard({
  href,
  icon,
  label,
  labelClass,
  iconBg,
  border,
  hoverText,
  ctaClass,
  title,
  desc,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  labelClass: string;
  iconBg: string;
  border: string;
  hoverText: string;
  ctaClass: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className={`group block bg-white border-2 ${border} rounded-2xl p-6 hover:shadow-xl transition-all`}
    >
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className={`text-xs font-semibold ${labelClass} uppercase tracking-wider mb-2`}>{label}</p>
      <h2 className={`text-xl font-bold text-gray-900 ${hoverText} transition-colors`}>{title}</h2>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
      <p className={`text-sm font-semibold ${ctaClass} mt-4`}>{cta}</p>
    </Link>
  );
}
