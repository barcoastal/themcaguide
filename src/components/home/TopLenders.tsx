import { Building2 } from "lucide-react";

export default function TopLenders() {
  const lenders = [
    { name: "OnDeck", type: "Direct Lender", minRevenue: "$100K/year", speed: "1-3 days", factorRate: "1.09-1.43", note: "One of the largest MCA providers" },
    { name: "Kabbage (by Amex)", type: "Line of Credit / MCA", minRevenue: "$3K/month", speed: "Minutes", factorRate: "Varies", note: "Now part of American Express" },
    { name: "Fundbox", type: "Line of Credit", minRevenue: "$30K/year", speed: "Next day", factorRate: "4.66-8.99% per draw", note: "Better option than traditional MCA" },
    { name: "CAN Capital", type: "Direct MCA", minRevenue: "$4.5K/month", speed: "2-3 days", factorRate: "1.15-1.48", note: "One of the original MCA providers" },
    { name: "Rapid Finance", type: "MCA / Term Loan", minRevenue: "$120K/year", speed: "1-2 days", factorRate: "1.16-1.45", note: "Offers both MCA and traditional loans" },
    { name: "Credibly", type: "MCA / Working Capital", minRevenue: "$15K/month", speed: "1-2 days", factorRate: "1.11-1.45", note: "Works with businesses as young as 6 months" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Major MCA Lenders to Know</h2>
          <p className="mt-3 text-lg text-gray-500">These are some of the biggest names in the MCA space</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenders.map((lender) => (
            <div key={lender.name} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{lender.name}</h3>
                  <p className="text-xs text-gray-500">{lender.type}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Min Revenue</span>
                  <span className="font-medium text-gray-900">{lender.minRevenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Funding Speed</span>
                  <span className="font-medium text-gray-900">{lender.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Factor Rate</span>
                  <span className="font-medium text-gray-900">{lender.factorRate}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">{lender.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
