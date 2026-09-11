export default function BuyingNotes() {
  const notes = [
    "Monthly plans have a one-month minimum.",
    "One consolidated revision round per content batch.",
    "You provide the business information, assets and approvals.",
    "Ad spend is separate.",
    "On-ground shoots are separate.",
    "We don't promise viral posts, guaranteed sales or magical follower numbers.",
  ];

  return (
    <section className="buying-section section-dark">
      <div className="section-shell">
        <div className="buying-grid">
          <div className="buying-heading">
            <div className="section-eyebrow section-eyebrow-light">
              BEFORE YOU BUY
            </div>

            <h2>A FEW BORING BUT IMPORTANT THINGS.</h2>
          </div>

          <div className="buying-content">
            <div className="buying-list">
              {notes.map((note, index) => (
                <div className="buying-item" key={note}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{note}</p>
                </div>
              ))}
            </div>

            <div className="buying-final">
              <p>We can promise the work.</p>
              <strong>
                The internet, unfortunately, did not sign our employment
                contract.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}