import Link from "next/link";

export default function PopularTools() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Free MCA Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Link href="/tools/mca-calculator" className="block bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
          <p className="text-3xl mb-2">🔢</p>
          <h3 className="text-lg font-bold text-gray-900">MCA Cost Calculator</h3>
          <p className="text-sm text-gray-500 mt-1">See the true cost of your MCA</p>
        </Link>
        <Link href="/tools/mca-payoff-calculator" className="block bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
          <p className="text-3xl mb-2">📅</p>
          <h3 className="text-lg font-bold text-gray-900">MCA Payoff Calculator</h3>
          <p className="text-sm text-gray-500 mt-1">Find your payoff date</p>
        </Link>
      </div>
    </section>
  );
}
