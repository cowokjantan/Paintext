"use client";
import { ArrowRight } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    { num: "01", t: "Install Wallet", d: "Download and install an approved Web3 compatible gateway application." },
    { num: "02", t: "Bridge Assets", d: "Route stable liquidity directly into the active Robinhood Chain rails." },
    { num: "03", t: "Execute Swap", d: "Access the decentralized trading interface and enter $RBULL contract address." },
    { num: "04", t: "Hold & Prosper", d: "Lock assets inside secure non-custodial environments to capture optimal vector gains." }
  ];

  return (
    <section id="dex" className="py-24 border-t border-neutral-900 bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center uppercase text-white mb-16">Acquisition Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-950 relative overflow-hidden group">
              <span className="absolute right-4 top-2 text-6xl font-black text-neutral-800/40 select-none italic">{step.num}</span>
              <h3 className="text-md font-bold text-white uppercase mt-4 relative z-10">{step.t}</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed relative z-10">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
