"use client";
import { NEWS_DATA } from "@/lib/mock-data";

export default function LatestNews() {
  return (
    <section className="py-24 border-t border-neutral-900 bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black uppercase text-white mb-12">Ecosystem Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_DATA.map((news, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-neutral-900">
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">{news.date}</span>
              <h3 className="text-lg font-bold text-white mt-2 uppercase">{news.title}</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{news.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
