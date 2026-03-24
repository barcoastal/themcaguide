import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">The Complete Guide to Merchant Cash Advances</h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">Everything small business owners need to know about MCA loans, debt settlement, and financing alternatives.</p>
        <Link href="/guides/what-is-mca" className="inline-block mt-8 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">Start Reading</Link>
      </div>
    </section>
  );
}
