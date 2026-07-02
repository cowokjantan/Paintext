"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { MOCK_STATS } from "@/lib/mock-data";
import { LineChart, ExternalLink, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ChartSection() {
  const [engine, setEngine] = useState<"dex" | "tv">("dex");

  return (
    <section id="chart" className="py-24 border-t border-neutral-900/60 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MOCK_STATS.map((stat, i) => (
            <div key={i} className="gold-border-glow rounded-2xl bg-neutral-900/40 p-5 backdrop-blur-xl">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">{stat.label}</p>
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3 text-emerald-400" /> : <ArrowDownRight className="w-3 h-3 text-rose-500" />}
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-xl font-black font-mono text-white">{stat.value}</p>
                <span className={`text-[10px] font-black font-mono px-1.5 py-0.5 rounded ${stat.isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-500"}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white italic">LIVE EXECUTION CANNES</h2>
          <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800">
            <button onClick={() => setEngine("dex")} className={`px-4 py-2 text-xs font-black uppercase rounded-lg transition ${engine === "dex" ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg" : "text-neutral-400"}`}>DexScreener</button>
            <button onClick={() => setEngine("tv")} className={`px-4 py-2 text-xs font-black uppercase rounded-lg transition ${engine === "tv" ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg" : "text-neutral-400"}`}>TradingView</button>
          </div>
        </div>

        <div className="w-full h-[600px] rounded-3xl overflow-hidden border-2 border-neutral-800 bg-black relative shadow-2xl">
          {engine === "dex" ? (
            <iframe src={SITE_CONFIG.links.dexScreenerEmbed} className="w-full h-full border-0 absolute inset-0" title="DEXScreener Terminal" sandbox="allow-scripts allow-same-origin" loading="lazy" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
              <LineChart className="w-12 h-12 text-amber-500/30 mb-3 animate-pulse" />
              <p className="font-black uppercase tracking-wider text-sm text-white">TradingView Core Node Active</p>
              <a href={SITE_CONFIG.links.tradingView} target="_blank" className="mt-4 px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-black rounded-xl flex items-center gap-2">OPEN INTERFACE <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
