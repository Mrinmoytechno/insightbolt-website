export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <img
            src="/images/insightbolt-logo.png"
            alt="InsightBolt"
            className="brand-logo"
          />

          <span className="brand-name">INSIGHTBOLT</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#process">How it works</a>
          <a href="#work">Work</a>
          <a href="#packages">Packages</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Start a project →
        </a>
      </div>
    </header>
  );
}