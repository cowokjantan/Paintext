"use client";
import { ROADMAP_DATA } from "@/lib/mock-data";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">Ecosystem Roadmap</h2>
          <p className="text-sm text-neutral-400 mt-2">Strategic developmental vectors for ecosystem dominance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_DATA.map((step, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-neutral-900 glass-hover">
              <span className="text-xs font-black text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2.5 py-1 rounded-md">{step.phase}</span>
              <h3 className="text-lg font-black text-white mt-4 uppercase tracking-wide">{step.title}</h3>
              <ul className="mt-4 space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="text-xs text-neutral-400 flex items-center gap-2">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
