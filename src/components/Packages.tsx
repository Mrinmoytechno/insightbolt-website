export default function Packages() {
  return (
    <section className="packages-section section-dark" id="packages">
      <div className="section-shell">
        <div className="packages-heading">
          <div className="section-eyebrow section-eyebrow-light">
            PACKAGES
          </div>

          <h2>PICK YOUR LEVEL OF INVOLVEMENT.</h2>

          <p>
            Because not every business needs us living inside their Instagram
            account.
          </p>
        </div>

        <div className="packages-grid">
          <article className="package-card">
            <div className="package-top">
              <span className="package-number">01</span>
              <span className="package-type">ONE-TIME</span>
            </div>

            <div className="package-name-row">
              <h3>LAUNCH</h3>
              <span className="package-price">₹4,999</span>
            </div>

            <p className="package-description">
              For businesses that want to test the waters.
            </p>

            <ul className="package-features">
              <li>2 reels</li>
              <li>2 carousels/static posts</li>
              <li>Captions + CTAs</li>
              <li>1-week content plan</li>
              <li>Basic profile + offer review</li>
              <li>1 campaign/content recommendation</li>
              <li>7-day delivery</li>
            </ul>

            <a href="#start" className="package-link">
              Start with Launch →
            </a>
          </article>

          <article className="package-card">
            <div className="package-top">
              <span className="package-number">02</span>
              <span className="package-type">MONTHLY</span>
            </div>

            <div className="package-name-row">
              <h3>STARTER</h3>
              <span className="package-price">₹7,999</span>
            </div>

            <div className="package-period">/ month</div>

            <p className="package-description">
              For businesses that need consistent social media execution.
            </p>

            <ul className="package-features">
              <li>8 content pieces</li>
              <li>4 reels</li>
              <li>4 carousels/static posts</li>
              <li>Monthly content calendar</li>
              <li>Instagram posting</li>
              <li>Basic profile optimisation</li>
              <li>Monthly performance summary</li>
            </ul>
          </article>

          <article className="package-card package-card-featured">
            <div className="package-badge">MOST POPULAR</div>

            <div className="package-top">
              <span className="package-number">03</span>
              <span className="package-type">MONTHLY</span>
            </div>

            <div className="package-name-row">
              <h3>GROWTH</h3>
              <span className="package-price">₹14,999</span>
            </div>

            <div className="package-period">/ month</div>

            <p className="package-description">
              Our main recurring system.
            </p>

            <ul className="package-features">
              <li>12 content pieces</li>
              <li>6 reels</li>
              <li>6 carousels/static posts</li>
              <li>Instagram management</li>
              <li>Up to 12 stories</li>
              <li>1 campaign/offer plan</li>
              <li>Customer Signal Loop research</li>
              <li>Monthly strategy review</li>
              <li>Performance report</li>
              <li>Next-month recommendations</li>
            </ul>

            <a href="#start" className="package-link package-link-featured">
              Build with Growth →
            </a>
          </article>

          <article className="package-card">
            <div className="package-top">
              <span className="package-number">04</span>
              <span className="package-type">MONTHLY</span>
            </div>

            <div className="package-name-row">
              <h3>GROWTH PLUS</h3>
              <span className="package-price">₹24,999</span>
            </div>

            <div className="package-period">/ month</div>

            <p className="package-description">
              For businesses ready for more execution + advertising.
            </p>

            <ul className="package-features">
              <li>16 content pieces</li>
              <li>8 reels</li>
              <li>8 carousels/static posts</li>
              <li>Instagram management</li>
              <li>Up to 20 stories</li>
              <li>2 campaigns/offers</li>
              <li>Customer Signal Loop optimisation</li>
              <li>Basic enquiry tracking</li>
              <li>Monthly strategy meeting</li>
              <li>Paid advertising management</li>
            </ul>

            <div className="package-note">Ad spend is separate.</div>
          </article>
        </div>
      </div>
    </section>
  );
}