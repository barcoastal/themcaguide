import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The MCA Guide. Learn how we use cookies, analytics, and affiliate links. We do not collect personal information unless you contact us.",
  alternates: {
    canonical: "https://themcaguide.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg prose-blue max-w-none">
        <p><strong>Last updated:</strong> March 25, 2026</p>
        <h2>Information We Collect</h2>
        <p>The MCA Guide uses Google Analytics to collect anonymous usage data including pages visited, time on site, and referring sources. We do not collect personally identifiable information unless you voluntarily provide it via our contact page.</p>
        <h2>Cookies</h2>
        <p>We use cookies for analytics purposes through Google Analytics. These cookies help us understand how visitors interact with our website. You can disable cookies in your browser settings at any time.</p>
        <h2>Affiliate Links</h2>
        <p>Some links on this site are affiliate links. When you click an affiliate link, the third-party provider may set their own cookies to track the referral. We do not control these third-party cookies.</p>
        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics:</strong> For website traffic analysis</li>
          <li><strong>Cloudflare:</strong> For website hosting</li>
        </ul>
        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, contact us at <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a>.</p>
      </div>
    </div>
  );
}
