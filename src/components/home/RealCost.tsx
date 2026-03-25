export default function RealCost() {
  const options = [
    { name: "MCA", cost: 67500, rate: "40-350% APR", color: "bg-red-500", width: "w-full", emoji: "⚠️" },
    { name: "Online Lender", cost: 58000, rate: "15-45% APR", color: "bg-orange-400", width: "w-[86%]", emoji: "😐" },
    { name: "SBA Loan", cost: 53500, rate: "6-13% APR", color: "bg-green-500", width: "w-[60%]", emoji: "✅" },
    { name: "Bank Line of Credit", cost: 52500, rate: "5-10% APR", color: "bg-green-600", width: "w-[50%]", emoji: "✅" },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">The Real Cost of a $50,000 Advance</h2>
          <p className="mt-3 text-lg text-gray-500">See how MCA compares to other financing options</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-6">
            {options.map((opt) => (
              <div key={opt.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{opt.emoji}</span>
                    <span className="font-semibold text-gray-900">{opt.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">${opt.cost.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 ml-2">{opt.rate}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div className={`${opt.color} ${opt.width} h-4 rounded-full transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800">
              <span className="font-bold">💡 Did you know?</span> On a $50,000 MCA with a 1.35 factor rate, you pay back $67,500 — that&apos;s $17,500 in fees. The same $50K through an SBA loan could cost just $3,500 in interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
