"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] text-white">
            Robin<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300">Bull</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0">
            The Bull of Robinhood Chain. Built by strong community assets, heavy cultural capital, and pure hyper-bullish trajectory.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href={SITE_CONFIG.links.dex} target="_blank" className="px-8 py-4 bg-emerald-500 text-neutral-950 font-black tracking-wider text-sm rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition shadow-[0_0_30px_rgba(16,185,129,0.2)]">BUY RBULL <ArrowUpRight className="w-4 h-4" /></a>
            <a href="#chart" className="px-8 py-4 bg-neutral-900/80 border border-neutral-800 text-white font-bold tracking-wider text-sm rounded-xl hover:bg-neutral-800 transition">VIEW LIVE CHART</a>
          </motion.div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full glass-card p-4 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex items-center justify-center">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image src="/image_42fcfd.jpg" alt="RobinBull Logo" fill priority className="object-cover" sizes="(max-w-7xl) 100vw, 400px" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
