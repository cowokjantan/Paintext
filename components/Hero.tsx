"use client";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Matrix & Matrix Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98103_1px,transparent_1px),linear-gradient(to_bottom,#10b98103_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase">
            🔥 NO FEAR • TO THE MOON
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
            ROBIN<br /><span className="gold-gradient-text">BULL</span>
          </h1>
          <p className="text-base text-neutral-400 max-w-lg mx-auto lg:mx-0 font-medium">
            The multi-million dollar meme asset engine engineered exclusively for the Robinhood Chain community. Strong together, unstoppable power.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#chart" className="px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black tracking-wider text-sm rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:scale-105 transition">
              LAUNCH LIVE TERMINAL
            </a>
            <a href={SITE_CONFIG.links.twitter} target="_blank" className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-bold tracking-wider text-sm rounded-xl hover:bg-neutral-800 transition">
              JOIN SYNDICATE
            </a>
          </div>
        </div>
        
        {/* Prioritas Utama: Logo Token Anda yang Sangat Menonjol */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-neutral-900 border-4 border-amber-500/30 p-2 shadow-[0_0_60px_rgba(245,158,11,0.15)] animate-[spin_120s_linear_infinite]">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-500/60 bg-black">
              <Image 
                src="/image_42fcfd.jpg" 
                alt="RobinBull Logo" 
                fill 
                priority 
                className="object-cover animate-[spin_120s_linear_infinite_reverse]" 
                sizes="(max-w-7xl) 100vw, 400px" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
