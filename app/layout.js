import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import {GoogleAnalytics} from "@next/third-parties/google";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});


export const metadata = {
  title: "Pirunthapan - Portfolio",
  description: "Portfolio website of Pirunthapan Murugaiah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-75NYCV657M"/>
    </html>
  );
}