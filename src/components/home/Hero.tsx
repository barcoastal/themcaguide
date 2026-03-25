import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Free Guide for Small Business Owners</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Understanding MCA Loans <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Got offered a Merchant Cash Advance? Before you sign anything, learn how MCAs really work, what they actually cost, and what your better options are.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/guides/what-is-mca" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25">
                Start Learning
              </Link>
              <Link href="/tools/mca-calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors text-lg">
                Calculate Your MCA Cost
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-3">🏪</p>
                  <p className="text-xl font-bold text-blue-800">Your Business</p>
                  <p className="text-sm text-blue-600 mt-1">Deserves Clear Answers</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <p className="text-2xl">💡</p>
                <p className="text-xs font-semibold text-gray-700 mt-1">Know Before<br/>You Sign</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <p className="text-2xl">🛡️</p>
                <p className="text-xs font-semibold text-gray-700 mt-1">Protect Your<br/>Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
