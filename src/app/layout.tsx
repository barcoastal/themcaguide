import type { Metadata } from "next";
import { Inter, Source_Serif_4, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import BroadsheetMasthead from "@/components/layout/BroadsheetMasthead";
import BroadsheetFooter from "@/components/layout/BroadsheetFooter";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The MCA Guide. Merchant Cash Advance Education",
    template: "%s | MCA Guide",
  },
  description:
    "Free MCA education for small business owners. Learn how merchant cash advances work, what they really cost, and how to protect your business. By Bar Alezrah.",
  metadataBase: new URL("https://themcaguide.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The MCA Guide",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630, alt: "The MCA Guide. Free MCA Education for Small Business Owners" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://themcaguide.com",
    languages: {
      "en-US": "https://themcaguide.com",
    },
  },
  other: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
  verification: {
    other: {
      "indexnow-key": "mca-guide-indexnow-2026",
    },
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
    url: "https://themcaguide.com/about/bar-alezrah",
    sameAs: [
      "https://www.linkedin.com/in/bar-elezra-647573153/",
    ],
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
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <BroadsheetMasthead />
        <main className="flex-1">{children}</main>
        <BroadsheetFooter />
        <Analytics />
      </body>
    </html>
  );
}
