import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The MCA Guide editorial team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <div className="prose prose-lg prose-blue max-w-none">
        <p>Have a question about merchant cash advances? Found an error in one of our articles? Want to suggest a topic?</p>
        <p>Email us at: <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a></p>
        <p>We aim to respond within 2 business days.</p>
      </div>
    </div>
  );
}
