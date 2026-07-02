"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { MOCK_STATS } from "@/lib/mock-data";
import { LineChart, ExternalLink } from "lucide-react";

export default function ChartSection() {
  const [engine, setEngine] = useState<"dex" | "tv">("dex");

  return (
    <section id="chart" className="py-24 border-t border-neutral-900 bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {MOCK_STATS.map((stat, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-neutral-900">
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">{stat.label}</p>
              <p className="text-lg font-black tracking-tight text-white mt-1">{stat.value}</p>
              <p className={`text-[10px] font-bold mt-1 ${stat.isPositive ? "text-emerald-400" : "text-rose-500"}`}>{stat.change}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Live Execution Chart</h2>
            <p className="text-xs text-neutral-500">Real-time telemetry and pricing architecture for $RBULL</p>
          </div>
          <div className="flex bg-neutral-900 border border-neutral-800 p-1 rounded-xl">
            <button onClick={() => setEngine("dex")} className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition ${engine === "dex" ? "bg-emerald-500 text-neutral-950" : "text-neutral-400"}`}>DexScreener</button>
            <button onClick={() => setEngine("tv")} className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition ${engine === "tv" ? "bg-emerald-500 text-neutral-950" : "text-neutral-400"}`}>TradingView</button>
          </div>
        </div>
        <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative">
          {engine === "dex" ? (
            <iframe src={SITE_CONFIG.links.dexScreenerEmbed} className="w-full h-full border-0 absolute inset-0" title="DEXScreener Terminal" sandbox="allow-scripts allow-same-origin" loading="lazy" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
              <LineChart className="w-12 h-12 text-emerald-500/40 mb-3" />
              <p className="font-bold text-sm">TradingView Direct API Terminal</p>
              <a href={SITE_CONFIG.links.tradingView} target="_blank" className="mt-4 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-bold flex items-center gap-2">OPEN GLOBAL CHART <ExternalLink className="w-3 h-3" /></a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
