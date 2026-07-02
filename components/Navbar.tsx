"use client";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Chart", "DEX", "Tokenomics", "Roadmap", "FAQ", "Community"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-neutral-900 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-black text-xl tracking-tight text-white italic">
          ROBIN<span className="text-emerald-400">BULL</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-wider font-bold text-neutral-400 hover:text-emerald-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href={SITE_CONFIG.links.dex} target="_blank" className="px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-bold tracking-wider hover:bg-neutral-800 transition">Launch App</a>
          <a href={SITE_CONFIG.links.dex} target="_blank" className="px-5 py-2.5 bg-emerald-500 text-neutral-950 rounded-xl text-xs font-black tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition flex items-center gap-1">BUY $RBULL <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <button className="md:hidden text-neutral-400" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-neutral-900 px-4 py-6 absolute top-full left-0 right-0 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-wider text-neutral-300">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
