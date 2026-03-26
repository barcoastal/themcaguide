import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/seo/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The MCA Guide. Merchant Cash Advance Education",
    template: "%s | The MCA Guide",
  },
  description:
    "Free MCA education for small business owners. Learn how merchant cash advances work, what they really cost, and how to protect your business. By Bar Alezrah.",
  metadataBase: new URL("https://themcaguide.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The MCA Guide",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The MCA Guide",
  url: "https://themcaguide.com",
  logo: "https://themcaguide.com/images/logo.png",
  founder: {
    "@type": "Person",
    name: "Bar Alezrah",
  },
  description: "Free MCA education for small business owners.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The MCA Guide",
  url: "https://themcaguide.com",
  description:
    "Free MCA education for small business owners. Learn how merchant cash advances work, what they really cost, and how to protect your business.",
  author: {
    "@type": "Person",
    name: "Bar Alezrah",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
