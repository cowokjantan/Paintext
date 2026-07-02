import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RobinBull ($RBULL) - To The Moon",
  description: "The Ultimate Bull on Robinhood Chain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
