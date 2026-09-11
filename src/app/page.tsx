import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import SignalLoop from "@/components/SignalLoop";
import BehindBolt from "@/components/BehindBolt";
import Work from "@/components/Work";
import Packages from "@/components/Packages";
import BuyingNotes from "@/components/BuyingNotes";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />

        <Problem />

        <Services />

        <SignalLoop />

        <BehindBolt />

        <Work />

        <Packages />

        <BuyingNotes />

        <HowItWorks />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
}