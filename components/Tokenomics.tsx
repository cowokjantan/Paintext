export default function Tokenomics() {
  const allocation = [
    { name: "Liquidity Pool Locked", share: "40%", desc: "100% LP Burned forever at launch." },
    { name: "Community Airdrop & Cult", share: "30%", desc: "Distributed to core early belivers." },
    { name: "Marketing Expansion", share: "15%", desc: "For global viral trends & animations." },
    { name: "Ecosystem Development", share: "15%", desc: "Reserved for future multichain nodes." },
  ];

  return (
    <section id="tokenomics" className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-4xl font-black uppercase tracking-tight italic">TOKENOMICS <span className="gold-gradient-text">BASE</span></h2>
          <div className="space-y-4">
            {allocation.map((item, idx) => (
              <div key={idx} className="p-5 bg-neutral-900/30 border border-neutral-900 rounded-2xl flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.name}</h4>
                  <p className="text-xs text-neutral-400 mt-1">{item.desc}</p>
                </div>
                <span className="text-xl font-black text-amber-400 font-mono">{item.share}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-72 h-72 rounded-full border-[24px] border-neutral-900 flex items-center justify-center relative gold-border-glow bg-black">
            <div className="text-center">
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Total Fixed Supply</p>
              <p className="text-3xl font-black text-white italic mt-1">1 BILLION</p>
              <p className="text-xs font-black text-emerald-400 font-mono mt-0.5">$RBULL Base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
