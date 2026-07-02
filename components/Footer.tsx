"use client";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-black italic text-lg text-white">ROBIN<span className="text-emerald-400">BULL</span></p>
          <p className="text-[10px] text-neutral-500 mt-1">Ecosystem smart contracts are decentralized assets under open parameters.</p>
        </div>
        <div className="flex gap-6 text-[10px] uppercase font-bold text-neutral-400">
          <a href={SITE_CONFIG.links.twitter} target="_blank" className="hover:text-white transition">Twitter</a>
          <a href={SITE_CONFIG.links.telegram} target="_blank" className="hover:text-white transition">Telegram</a>
          <a href={SITE_CONFIG.links.explorer} target="_blank" className="hover:text-white transition">Explorer</a>
        </div>
        <p className="text-[10px] text-neutral-600">&copy; {new Date().getFullYear()} RobinBull Ecosystem Enterprise.</p>
      </div>
    </footer>
  );
}
