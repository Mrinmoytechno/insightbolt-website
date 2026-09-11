import Image from "next/image";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">

        <a
          href="#top"
          className="brand"
          aria-label="InsightBolt home"
        >
          <Image
            src="/images/insightbolt-logo.png"
            alt="InsightBolt"
            width={40}
            height={40}
            className="brand-logo"
          />

          <span className="brand-name">
            InsightBolt
          </span>
        </a>

        <details className="nav-menu">
          <summary aria-label="Open navigation menu">

            <span
              className="menu-icon"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>

            <span className="sr-only">
              Open navigation menu
            </span>

          </summary>

          <div className="menu-panel">

            <div className="menu-panel-header">
              <span>
                NAVIGATION
              </span>

              <span>
                INSIGHTBOLT
              </span>
            </div>

            <nav aria-label="Main navigation">

              <a href="#services">
                What we do
              </a>

              <a href="#process">
                How it works
              </a>

              <a href="#work">
                Work
              </a>

              <a href="#packages">
                Packages
              </a>

              <a href="#faq">
                FAQ
              </a>

              <a
                href="#contact"
                className="menu-panel-cta"
              >
                Start a project →
              </a>

            </nav>
          </div>
        </details>

      </div>
    </header>
  );
}