import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InternalLinksProps {
  links: { href: string; title: string }[];
  title?: string;
}

export default function InternalLinks({ links, title = "Related Reading" }: InternalLinksProps) {
  return (
    <div className="my-8 bg-gray-50 rounded-2xl p-6 not-prose">
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="flex items-center justify-between gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
            <span className="text-sm font-medium text-gray-700">{link.title}</span>
            <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
