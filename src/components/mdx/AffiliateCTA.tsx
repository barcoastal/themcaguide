interface AffiliateCTAProps {
  name: string;
  description: string;
  href: string;
  cta?: string;
}

export default function AffiliateCTA({ name, description, href, cta = "Learn More" }: AffiliateCTAProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Sponsored</p>
      <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener nofollow sponsored"
        className="inline-block mt-3 px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
        data-affiliate="true"
      >
        {cta}
      </a>
    </div>
  );
}
