import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">

        <div className="footer-main">

          <div className="footer-brand">

            <a
              href="#top"
              className="footer-logo"
              aria-label="InsightBolt home"
            >
              <Image
                src="/images/insightbolt-dark.png"
                alt=""
                width={34}
                height={34}
                className="footer-logo-mark"
              />

              <span>
                InsightBolt
              </span>
            </a>

            <p>
              Social media that moves
              your business forward.
            </p>

          </div>

          <div className="footer-column">

            <span className="footer-label">
              CONNECT
            </span>

            

            <a
              href="https://www.instagram.com/insightbolt.enquiries?stkn=ZjR0d3UxMjNvdXht"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="mailto:insightbolt.official@gmail.com"
            >
              Email
            </a>

          </div>

          <div className="footer-column">

            <span className="footer-label">
              EXPLORE
            </span>

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

            <a href="#contact">
              Start a project
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 InsightBolt
          </span>

          <span className="footer-system">
            CLARITY → CONTENT →
            CAMPAIGNS → MOMENTUM
          </span>

        </div>

      </div>
    </footer>
  );
}