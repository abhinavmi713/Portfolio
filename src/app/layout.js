import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Backend & Full Stack Engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${site.name} · Backend & Full Stack Engineer`,
    description: site.description,
    url: "/",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1220" },
  ],
};

// Runs before paint so a stored or system dark theme never flashes light.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})()`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/abhinav-portrait.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "UPES Dehradun" },
  sameAs: [site.links.linkedin, site.links.github, site.links.codeforces, site.links.leetcode],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <div className="relative">
          <div className="gridbg" aria-hidden="true" />
          <div className="wrap">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
