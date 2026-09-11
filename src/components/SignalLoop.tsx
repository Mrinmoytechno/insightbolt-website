const signals = [
  "CUSTOMER SIGNALS",
  "WHAT THEY'RE ACTUALLY ASKING",
  "MARKETING DECISIONS",
  "CONTENT + CAMPAIGNS",
  "RESPONSE",
  "NEXT CYCLE",
];

const sources = [
  "DMs.",
  "Comments.",
  "Reviews.",
  "Enquiries.",
  "Content response.",
  "Campaign results.",
];

export default function SignalLoop() {
  return (
    <section className="signal-section section-dark" id="signal-loop">
      <div className="container">
        <div className="signal-heading">
          <div>
            <div className="eyebrow eyebrow-light">
              THE INSIGHTBOLT WAY
            </div>

            <h2>
              WE DON&apos;T JUST CREATE.
              <br />
              WE PAY ATTENTION.
            </h2>
          </div>
        </div>

        <div className="signal-flow">
          {signals.map((signal, index) => (
            <div className="signal-flow-item" key={signal}>
              <span>{signal}</span>

              {index < signals.length - 1 && (
                <span className="signal-flow-arrow">↓</span>
              )}
            </div>
          ))}
        </div>

        <div className="signal-sources">
          {sources.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>

        <div className="signal-message">
          <p>
            The useful stuff is already talking.
          </p>

          <strong>
            We just need to listen.
          </strong>
        </div>

        <div className="signal-loop-definition">
          <div className="signal-loop-label">
            THE CUSTOMER SIGNAL LOOP
          </div>

          <p>
            We use real customer signals and marketing performance to
            decide what should be created, changed, tested or improved
            next.
          </p>
        </div>
      </div>
    </section>
  );
}