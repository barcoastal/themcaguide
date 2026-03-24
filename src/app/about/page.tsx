import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The MCA Guide",
  description: "Learn about The MCA Guide's mission to help small business owners understand merchant cash advances.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About The MCA Guide</h1>
      <div className="prose prose-lg prose-blue max-w-none">
        <h2>Our Mission</h2>
        <p>The MCA Guide exists to help small business owners make informed decisions about merchant cash advances and alternative financing options. We provide free, unbiased, research-backed information so you can understand your options before committing to any financial product.</p>
        <h2>Editorial Policy</h2>
        <p>Every article on The MCA Guide is thoroughly researched and fact-checked against primary sources including government databases, court filings, and industry reports. We cite our sources and update our content regularly to ensure accuracy.</p>
        <h2 id="affiliate-disclosure">Affiliate Disclosure</h2>
        <p>Some links on The MCA Guide are affiliate links. This means we may earn a commission if you click through and take action, at no additional cost to you. Our editorial content is never influenced by affiliate partnerships. We only recommend products and services we believe provide genuine value to small business owners.</p>
        <h2>Contact Us</h2>
        <p>Have a question, correction, or suggestion? We would love to hear from you. Visit our <a href="/contact">contact page</a> to get in touch.</p>
      </div>
    </div>
  );
}
