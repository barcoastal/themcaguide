import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="px-6 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900">Go Home</Link>
        <Link href="/guides" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Browse Guides</Link>
      </div>
    </div>
  );
}
