"use client";
import { SITE_CONFIG } from "@/config/site";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-neutral-900 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-black italic tracking-wider">
          ROBIN<span className="text-emerald-400">BULL</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-400">
          <a href="#home" className="hover:text-amber-400 transition">Home</a>
          <a href="#chart" className="hover:text-amber-400 transition">Live Chart</a>
          <a href="#tokenomics" className="hover:text-amber-400 transition">Tokenomics</a>
          <a href="#buy" className="hover:text-amber-400 transition">How To Buy</a>
        </div>
        <a href={SITE_CONFIG.links.twitter} target="_blank" className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition">
          BUY $RBULL
        </a>
      </div>
    </nav>
  );
}
