"use client";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export default function Tokenomics() {
  const allocation = [
    { name: "Liquidity Pool", share: "40%", hue: "bg-emerald-500" },
    { name: "Community Incentives", share: "30%", hue: "bg-green-500" },
    { name: "Marketing & Growth", share: "15%", hue: "bg-lime-400" },
    { name: "Development Core", share: "10%", hue: "bg-emerald-700" },
    { name: "Treasury Asset", share: "5%", hue: "bg-green-900" },
  ];

  return (
    <section id="tokenomics" className="py-24 border-t border-neutral-900 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl font-black uppercase tracking-tight text-white">Tokenomics Architecture</h2>
          <p className="text-sm text-neutral-400">Strategic distribution modeled to optimize long-term scarcity and community holding power.</p>
          <div className="space-y-3">
            {allocation.map((alloc) => (
              <div key={alloc.name} className="flex justify-between items-center p-4 glass-card rounded-xl border border-neutral-900/50">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${alloc.hue}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">{alloc.name}</span>
                </div>
                <span className="text-sm font-black text-white">{alloc.share}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-80 h-80 rounded-full border-[32px] border-neutral-900 flex items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.05)]">
            <div className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="text-center">
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Total Supply</p>
              <p className="text-2xl font-black text-white mt-1">1,000,000,000</p>
              <p className="text-xs font-bold text-emerald-400 mt-0.5">$RBULL Token Base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
