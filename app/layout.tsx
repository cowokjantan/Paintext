import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  openGraph: {
    type: "website",
    url: SITE_CONFIG.seo.url,
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [{ url: SITE_CONFIG.seo.ogImage }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakartaSans.variable} font-sans text-neutral-200 bg-[#050505] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
