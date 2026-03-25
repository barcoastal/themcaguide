import Link from "next/link";

export default function PopularTools() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Free Calculators</h2>
        <p className="mt-3 text-lg text-gray-500">See the numbers before you commit</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/tools/mca-calculator" className="group bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all text-center">
          <p className="text-5xl mb-4">🧮</p>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">MCA Cost Calculator</h3>
          <p className="text-gray-500 mt-2">Enter your deal terms and see the <span className="font-semibold text-red-600">true cost</span></p>
          <p className="mt-4 text-blue-600 font-semibold text-sm">Try it free &rarr;</p>
        </Link>
        <Link href="/tools/mca-payoff-calculator" className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 hover:shadow-xl transition-all text-center">
          <p className="text-5xl mb-4">📅</p>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">MCA Payoff Calculator</h3>
          <p className="text-gray-500 mt-2">Find out exactly <span className="font-semibold text-green-600">when you&apos;ll be free</span></p>
          <p className="mt-4 text-green-600 font-semibold text-sm">Try it free &rarr;</p>
        </Link>
      </div>
    </section>
  );
}
