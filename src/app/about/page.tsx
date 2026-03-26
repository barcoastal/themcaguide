import { Metadata } from "next";
import { Heart, Target, Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About The MCA Guide",
  description: "The MCA Guide was created by Bar Alezrah, a small business owner helping other owners understand merchant cash advances. Free, honest education with no sales pitches.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About The MCA Guide</h1>

      <div className="bg-blue-50 rounded-2xl p-6 mb-8 flex items-start gap-4 not-prose">
        <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-blue-700">BA</div>
        <div>
          <p className="font-bold text-gray-900 text-lg">Bar Alezrah</p>
          <p className="text-sm text-gray-500">Small Business Owner & MCA Educator</p>
        </div>
      </div>

      <div className="prose prose-lg prose-blue max-w-none">
        <h2>Why I Built This</h2>
        <p>
          Hey, I'm Bar. I'm a small business owner, just like you. I created The MCA Guide because I believe every business owner deserves to understand exactly what they're signing before they take on a merchant cash advance.
        </p>
        <p>
          The MCA industry is full of confusing terms, hidden costs, and high-pressure sales tactics. I wanted to build a resource that cuts through all of that and gives you the <strong>straight facts</strong>. written in plain English, by someone who actually runs a business.
        </p>

        <h2>What You'll Find Here</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Target className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-bold text-gray-900">Honest Information</h3>
            <p className="text-sm text-gray-500 mt-1">No sales pitches. Just facts about how MCAs work, what they cost, and what your options are.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Shield className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-bold text-gray-900">Protection First</h3>
            <p className="text-sm text-gray-500 mt-1">Learn the risks, red flags, and how to protect your business before signing anything.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Heart className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-bold text-gray-900">From a Real Owner</h3>
            <p className="text-sm text-gray-500 mt-1">This isn't written by a finance company. It's written by a business owner for business owners.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <Mail className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-bold text-gray-900">Always Free</h3>
            <p className="text-sm text-gray-500 mt-1">Every guide, tool, and calculator on this site is 100% free. No paywalls, no required sign-ups.</p>
          </div>
        </div>

        <h2 id="affiliate-disclosure">Affiliate Disclosure</h2>
        <p>
          Some links on The MCA Guide are affiliate links. This means I may earn a small commission if you click through and take action, at no extra cost to you. This helps keep the site running. My recommendations are never influenced by affiliate partnerships. I only link to products and services I believe genuinely help small business owners.
        </p>

        <h2>Contact Me</h2>
        <p>
          Have a question? Found something wrong? Want to share your MCA story? I'd love to hear from you. Reach out at <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a>.
        </p>
      </div>
    </div>
  );
}
