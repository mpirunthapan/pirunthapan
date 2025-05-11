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