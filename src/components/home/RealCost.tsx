import { AlertTriangle } from "lucide-react";

/**
 * The real cost of a $50K advance — horizontal bar comparison.
 *
 * Rewritten without recharts so the chart is crisp at all sizes, respects
 * the Tailwind palette, and ships no client JS (the component is now a
 * server component). Drops the "recharts" dependency entirely if this is
 * the only place it's used.
 */
const rows = [
  { name: "MCA", cost: 67500, pct: 100, color: "bg-red-500" },
  { name: "Online Lender", cost: 58000, pct: 52, color: "bg-orange-500" },
  { name: "SBA Loan", cost: 53500, pct: 20, color: "bg-green-500" },
  { name: "Bank LOC", cost: 52500, pct: 14, color: "bg-green-600" },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function RealCost() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">
            The Real Cost
          </p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            A $50,000 Advance, Compared Honestly
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            See how MCA compares to other financing options
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-5">
            {rows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[110px_1fr_100px] items-center gap-4"
              >
                <span className="text-sm font-semibold text-gray-700">{r.name}</span>
                <div className="h-9 bg-gray-50 rounded-r-lg overflow-hidden">
                  <div
                    className={`h-full ${r.color} rounded-r-lg transition-[width] duration-500`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-gray-900 text-right tabular-nums">
                  {fmt(r.cost)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-bold">Did you know?</span> On a $50,000 MCA with a
              1.35 factor rate, you pay back $67,500. That&apos;s $17,500 in fees. The
              same $50K through an SBA loan could cost just $3,500 in interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
