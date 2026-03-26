import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              The MCA Guide
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Created by Bar Alezrah. a small business owner helping other owners understand MCAs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/guides" className="text-sm text-gray-500 hover:text-blue-800">Guides</Link></li>
              <li><Link href="/articles" className="text-sm text-gray-500 hover:text-blue-800">Articles</Link></li>
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-blue-800">Tools</Link></li>
              <li><Link href="/glossary" className="text-sm text-gray-500 hover:text-blue-800">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-800">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-blue-800">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-800">Privacy Policy</Link></li>
              <li><a href="/sitemap.xml" className="text-sm text-gray-500 hover:text-blue-800">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} The MCA Guide. For informational purposes only. Not financial advice.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you.{" "}
            <Link href="/about#affiliate-disclosure" className="underline hover:text-blue-800">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
