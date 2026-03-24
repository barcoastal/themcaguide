import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getGlossaryTerms, getGlossaryLetters } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "MCA Glossary — Merchant Cash Advance Terms A-Z",
  description: "Complete glossary of merchant cash advance terms. Understand factor rates, holdbacks, UCC filings, and more.",
};

export default function GlossaryPage() {
  const terms = getGlossaryTerms();
  const letters = getGlossaryLetters(terms);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "MCA Glossary",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: "Glossary" }]} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Glossary</h1>
        <p className="text-lg text-gray-500 mb-8">Key terms and definitions for merchant cash advances.</p>

        <nav className="flex flex-wrap gap-2 mb-8">
          {letters.map((letter) => (
            <a key={letter} href={`#letter-${letter}`} className="px-3 py-1 bg-gray-100 rounded text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-800">
              {letter}
            </a>
          ))}
        </nav>

        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b border-gray-200 pb-2">{letter}</h2>
            <dl className="space-y-4">
              {terms
                .filter((t) => t.term[0].toUpperCase() === letter)
                .map((t) => (
                  <div key={t.term} id={t.term.toLowerCase().replace(/\s+/g, "-")}>
                    <dt className="font-semibold text-gray-900">{t.term}</dt>
                    <dd className="text-gray-600 mt-1">
                      {t.definition}
                      {t.relatedArticle && (
                        <>
                          {" "}
                          <Link href={`/${t.articleType === "guide" ? "guides" : "articles"}/${t.relatedArticle}`} className="text-blue-700 hover:underline text-sm">
                            Learn more →
                          </Link>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
