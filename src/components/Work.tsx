export default function Work() {
  return (
    <section className="work-section section-light" id="work">
      <div className="section-shell">
        <div className="work-heading">
          <div className="section-eyebrow">WORK / PROOF</div>

          <h2>SHOW, DON&apos;T TELL.</h2>

          <p>
            A marketing agency saying &ldquo;we&apos;re good at marketing&rdquo;
            isn&apos;t exactly evidence.
          </p>
        </div>

        <div className="work-framework">
          <article className="work-card">
            <div className="work-card-top">
              <span>01</span>
              <span>CONTENT</span>
            </div>

            <div className="work-card-visual work-content-visual">
              <div className="work-state">
                <span>BEFORE</span>
                <strong>ATTENTION</strong>
              </div>

              <div className="work-arrow">→</div>

              <div className="work-state">
                <span>AFTER</span>
                <strong>CLARITY</strong>
              </div>
            </div>

            <div className="work-card-bottom">
              <span>Content</span>
              <strong>Before → After</strong>
            </div>
          </article>

          <article className="work-card">
            <div className="work-card-top">
              <span>02</span>
              <span>CAMPAIGN</span>
            </div>

            <div className="work-card-visual work-campaign-visual">
              <div className="campaign-step">
                <span>01</span>
                <strong>Problem</strong>
              </div>

              <div className="campaign-line" />

              <div className="campaign-step">
                <span>02</span>
                <strong>Idea</strong>
              </div>

              <div className="campaign-line" />

              <div className="campaign-step">
                <span>03</span>
                <strong>Execution</strong>
              </div>
            </div>

            <div className="work-card-bottom">
              <span>Campaign</span>
              <strong>Problem → Idea → Execution</strong>
            </div>
          </article>

          <article className="work-card">
            <div className="work-card-top">
              <span>03</span>
              <span>STRATEGY</span>
            </div>

            <div className="work-card-visual work-strategy-visual">
              <div className="strategy-node">
                <span>SIGNAL</span>
              </div>

              <div className="strategy-arrow">→</div>

              <div className="strategy-node strategy-node-active">
                <span>DECISION</span>
              </div>

              <div className="strategy-arrow">→</div>

              <div className="strategy-node">
                <span>ACTION</span>
              </div>
            </div>

            <div className="work-card-bottom">
              <span>Strategy</span>
              <strong>Signal → Decision → Action</strong>
            </div>
          </article>
        </div>

        <div className="work-library">
          <div className="work-library-copy">
            <div className="section-eyebrow">BUILDING THE LIBRARY.</div>

            <h3>We&apos;re documenting the work as we build.</h3>

            <p>Want your business to be one of the examples?</p>
          </div>

          <a href="#start" className="button button-primary">
            Start a project →
          </a>
        </div>
      </div>
    </section>
  );
}