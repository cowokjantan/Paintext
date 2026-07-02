"use client";
import { FAQ_DATA } from "@/lib/mock-data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black uppercase text-center text-white mb-12">System Queries</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="border border-neutral-900 bg-neutral-950 rounded-xl overflow-hidden">
              <button onClick={() => setActive(active === i ? null : i)} className="w-full p-5 flex justify-between items-center text-left transition hover:bg-neutral-900/50">
                <span className="text-sm font-bold uppercase text-neutral-200">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${active === i ? "rotate-180" : ""}`} />
              </button>
              {active === i && (
                <div className="p-5 border-t border-neutral-900 bg-neutral-900/20 text-xs text-neutral-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
