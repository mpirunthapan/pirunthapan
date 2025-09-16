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

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDD7H4D7');
            `,
          }}
        />
        {/* End Google Tag Manager */}

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-NDD7H4D7"
          height="0" 
          width="0" 
          style={{display:"none", visibility:"hidden"}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}