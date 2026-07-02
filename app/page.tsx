import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChartSection from "@/components/ChartSection";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import Community from "@/components/Community";
import LatestNews from "@/components/LatestNews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ChartSection />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
        <LatestNews />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </>
  );
}
