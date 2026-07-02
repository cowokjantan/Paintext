"use client";
import { SITE_CONFIG } from "@/config/site";
import { Twitter, Send, Disc, Github } from "lucide-react";

export default function Community() {
  const hubs = [
    { icon: <Twitter />, name: "Twitter", link: SITE_CONFIG.links.twitter, d: "Get immediate operational announcements and viral narrative feeds." },
    { icon: <Send />, name: "Telegram", link: SITE_CONFIG.links.telegram, d: "Join the core strategic chat and interact with verified alpha holders." },
    { icon: <Disc />, name: "Discord", link: SITE_CONFIG.links.discord, d: "Access ecosystem operational groups, governance, and events." },
    { icon: <Github />, name: "GitHub", link: SITE_CONFIG.links.github, d: "Audit smart contracts, ecosystem development repos, and releases." }
  ];

  return (
    <section id="community" className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black uppercase text-white mb-4">Join the Bull Syndicate</h2>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-12">Connect with over 15,000+ active operators globally across standard Web3 protocols.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {hubs.map((hub) => (
            <a href={hub.link} target="_blank" key={hub.name} className="glass-card p-6 rounded-2xl border border-neutral-900 glass-hover block">
              <div className="text-emerald-400 w-8 h-8">{hub.icon}</div>
              <h3 className="text-md font-bold text-white uppercase mt-4">{hub.name}</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">{hub.d}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
