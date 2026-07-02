import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChartSection from "@/components/ChartSection";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChartSection />
        <Tokenomics />
      </main>
    </>
  );
}
