import Image from "next/image";

export default function BehindBolt() {
  return (
    <section className="behind-section" id="behind-bolt">
      <div className="section-shell">
        <div className="behind-grid">
          <div className="behind-image-wrap">
            <div className="behind-image-frame">
              <Image
                src="/images/founder-work.png"
                alt="The person behind InsightBolt working on marketing"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="behind-image"
              />
            </div>

            <div className="behind-image-label">
              <span>INSIGHTBOLT</span>
              <span>THE PERSON BEHIND THE WORK</span>
            </div>
          </div>

          <div className="behind-content">
            <div className="section-eyebrow">BEHIND THE BOLT</div>

            <h2>
              YES, THERE&apos;S A REAL
              <br />
              PERSON BEHIND THIS.
            </h2>

            <div className="behind-copy">
              <p>
                InsightBolt isn&apos;t built around a room full of people
                making a 47-slide presentation about your Instagram bio.
              </p>

              <p>It&apos;s built around doing the work.</p>

              <div className="behind-list">
                <div>Understanding the business.</div>
                <div>Creating the content.</div>
                <div>Running the campaigns.</div>
                <div>Watching what happens.</div>
                <div>Then making the next move.</div>
              </div>

              <div className="behind-principle">
                <strong>Strategy earns attention.</strong>
                <strong>Execution earns trust.</strong>
              </div>

              <div className="behind-signature">
                — Mrinmoy Paul, Founder of InsightBolt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}