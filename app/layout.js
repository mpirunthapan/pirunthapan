import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AnalyticsListener from "./components/AnalyticsListener";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
});


export const metadata = {
  title: "Pirunthapan - Portfolio",
  description: "Portfolio website of Pirunthapan Murugaiah",
  OpenGraph: {
    title: "Pirunthapan - Portfolio",
    description: "Portfolio website of Pirunthapan Murugaiah",
    url: "https://pirunthapan.vercel.app",
    siteName: "Pirunthapan - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pirunthapan - Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-75NYCV657M"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-75NYCV657M', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Pirunthapan - Portfolio",
              url: "https://pirunthapan.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/pirunthapan-murugaiah",
                "https://github.com/mpirunthapan",
                "https://www.instagram.com/pirunthapan_m/"
              ],
              description: "Portfolio website of Pirunthapan Murugaiah",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Pirunthapan Murugaiah",
                name: "Freelance",
                url: "https://pirunthapan.vercel.app",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://pirunthapan.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <AnalyticsListener />
        {children}
      </body>
    </html>
  );
}