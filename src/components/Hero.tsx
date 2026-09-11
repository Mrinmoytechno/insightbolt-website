export default function Hero() {
  return (
    <section className="hero section-dark" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">
            SOCIAL MEDIA + MARKETING
          </div>

          <h1>
            For businesses people think about before they buy.
          </h1>

          <p className="hero-description">
            InsightBolt helps growing businesses turn attention into
            enquiries and customers through content, campaigns and
            marketing that actually has a reason behind it.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Let&apos;s build your next month of marketing →
            </a>

            <a href="#process" className="button button-secondary">
              See how we work
            </a>
          </div>

          <p className="hero-microcopy">
            No random posting. No “10X your brand” nonsense.
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-grid-lines" />

          <div className="hero-panel">
            <div className="hero-panel-top">
              <span>INSIGHTBOLT</span>
              <span>01</span>
            </div>

            <div className="hero-panel-main">
              <div className="bolt-mark">↗</div>

              <div className="hero-signal-row">
                <span>CUSTOMER SIGNALS</span>
                <strong>→</strong>
              </div>

              <div className="hero-signal-row">
                <span>MARKETING</span>
                <strong>→</strong>
              </div>

              <div className="hero-signal-row">
                <span>RESPONSE</span>
                <strong>→</strong>
              </div>

              <div className="hero-signal-row">
                <span>NEXT MOVE</span>
                <strong>↗</strong>
              </div>
            </div>

            <div className="hero-panel-bottom">
              <span>CONTENT</span>
              <span>CAMPAIGNS</span>
              <span>MARKETING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}