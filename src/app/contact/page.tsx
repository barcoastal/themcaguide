import { Metadata } from "next";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have a question about merchant cash advances? Contact The MCA Guide team. We respond within 2 business days to help small business owners.",
  alternates: {
    canonical: "https://themcaguide.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <EditorialHero
        kicker="Get in Touch"
        title="Contact Us"
        dek="Have a question about merchant cash advances? Found an error? Want to suggest a topic?"
      />
      <div className="py-12">
      <div className="prose prose-lg prose-blue max-w-none">
        <p>Have a question about merchant cash advances? Found an error in one of our articles? Want to suggest a topic?</p>
        <p>Email us at: <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a></p>
        <p>We aim to respond within 2 business days.</p>
      </div>
      </div>
    </div>
  );
}
