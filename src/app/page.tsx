import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import SignalLoop from "@/components/SignalLoop";
import BehindBolt from "@/components/BehindBolt";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Services />
        <SignalLoop />
        <BehindBolt />

        <section id="work" className="future-section">
          <div className="section-shell">
            <div className="section-eyebrow">WORK</div>
            <h2>SHOW, DON&apos;T TELL.</h2>
          </div>
        </section>

        <section id="packages" className="future-section">
          <div className="section-shell">
            <div className="section-eyebrow">PACKAGES</div>
            <h2>PICK YOUR LEVEL OF INVOLVEMENT.</h2>
          </div>
        </section>

        <section id="faq" className="future-section">
          <div className="section-shell">
            <div className="section-eyebrow">FAQ</div>
            <h2>THE QUESTIONS PEOPLE ACTUALLY ASK.</h2>
          </div>
        </section>

        <section id="start" className="future-section">
          <div className="section-shell">
            <div className="section-eyebrow">START A PROJECT</div>
            <h2>LET&apos;S SEE IF WE MAKE SENSE.</h2>
          </div>
        </section>
      </main>
    </>
  );
}