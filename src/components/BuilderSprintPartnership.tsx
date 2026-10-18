"use client";
const BUILDER_SPRINT_URL =
  "https://contribebuildersprint.vercel.app";

const sprintStages = [
  {
    number: "01",
    date: "1–4 December 2026",
    title: "Get ready",
    description:
      "Prepare your idea and get ready to start building.",
  },
  {
    number: "02",
    date: "7–20 December 2026",
    title: "Build your project",
    description:
      "Spend 14 days working on your project and submit it according to the sprint requirements.",
  },
  {
    number: "03",
    date: "25–30 December 2026",
    title: "Explore your next opportunity",
    description:
      "Eligible project submitters are expected to receive their InsightBolt offer redemption instructions by email.",
  },
];

export default function BuilderSprintPartnership() {
  return (
    <section
      id="builder-sprint-partnership"
      aria-labelledby="builder-sprint-heading"
      className="bsp-section"
    >
      <div className="bsp-container">
        <div className="bsp-eyebrow">
          A PARTNERSHIP BUILT AROUND ACTION
        </div>

        <div className="bsp-heading-grid">
          <div>
            <h2 id="builder-sprint-heading">
              HAVE AN IDEA?
              <br />
              <span>MAKE IT REAL.</span>
            </h2>
          </div>

          <div className="bsp-intro">
            <p>
              InsightBolt is partnering with CONTRIBE
              Builder Sprint to support young builders
              who turn ideas into actual projects.
            </p>

            <p>
              Build something during the 14-day sprint.
              Eligible project submitters can then unlock
              a special offer on an InsightBolt monthly
              marketing plan.
            </p>

            <a
              href={BUILDER_SPRINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bsp-primary-cta"
            >
              Explore Builder Sprint →
            </a>

            <span className="bsp-microcopy">
              Registration opens 1 November 2026.
            </span>
          </div>
        </div>

        <div className="bsp-offer">
          <div className="bsp-offer-copy">
            <div className="bsp-offer-label">
              FOR ELIGIBLE PROJECT SUBMITTERS
            </div>

            <h3>
              50% OFF
              <br />
              <span>FOR THREE MONTHS.</span>
            </h3>

            <p>
              Receive 50% off one eligible InsightBolt
              monthly plan for three months, subject to
              the offer terms and redemption requirements.
            </p>
          </div>

          <div className="bsp-offer-detail">
            <span>THE OPPORTUNITY</span>

            <div>
              <strong>Build</strong>
              <p>Complete and submit your project.</p>
            </div>

            <div>
              <strong>Qualify</strong>
              <p>Meet the applicable sprint requirements.</p>
            </div>

            <div>
              <strong>Redeem</strong>
              <p>
                Follow the instructions sent to eligible
                participants by email.
              </p>
            </div>

            <a
              href={`${BUILDER_SPRINT_URL}/terms-and-conditions`}
              target="_blank"
              rel="noopener noreferrer"
              className="bsp-terms-link"
            >
              Read Terms &amp; Conditions →
            </a>
          </div>
        </div>

        <div className="bsp-timeline-heading">
          <span>THE JOURNEY</span>
          <h3>From idea to execution.</h3>
        </div>

        <div className="bsp-timeline">
          {sprintStages.map((stage) => (
            <article
              className="bsp-stage"
              key={stage.number}
            >
              <div className="bsp-stage-number">
                {stage.number}
              </div>

              <div className="bsp-stage-date">
                {stage.date}
              </div>

              <h4>{stage.title}</h4>

              <p>{stage.description}</p>
            </article>
          ))}
        </div>

        <div className="bsp-bottom-cta">
          <p>
            Your idea doesn't have to stay an idea.
          </p>

          <a
            href={BUILDER_SPRINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bsp-primary-cta"
          >
            Discover CONTRIBE Builder Sprint →
          </a>
        </div>
      </div>

      <style jsx global>{`
        .bsp-section {
          overflow: hidden;
          padding: 100px 0;
          background: #f4f6f8;
          color: #0b0b0d;
        }

        .bsp-container {
          width: min(calc(100% - 48px), 1180px);
          margin: 0 auto;
        }

        .bsp-eyebrow,
        .bsp-offer-label,
        .bsp-timeline-heading > span {
          color: #2563eb;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .bsp-heading-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: start;
          gap: 70px;
          margin-top: 24px;
        }

        .bsp-heading-grid h2 {
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.055em;
        }

        .bsp-heading-grid h2 span {
          color: #2563eb;
        }

        .bsp-intro p {
          margin-bottom: 16px;
          color: #525866;
          font-size: 15px;
          line-height: 1.8;
        }

        .bsp-primary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 18px;
          border-radius: 7px;
          background: #2563eb;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .bsp-primary-cta:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .bsp-microcopy {
          display: block;
          margin-top: 12px;
          color: #737987;
          font-size: 11px;
        }

        .bsp-offer {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 55px;
          margin-top: 75px;
          padding: 48px;
          background: #0b0b0d;
          color: #f4f6f8;
          border-radius: 12px;
        }

        .bsp-offer h3 {
          margin-top: 18px;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .bsp-offer h3 span {
          color: #60a5fa;
        }

        .bsp-offer-copy > p {
          max-width: 460px;
          margin-top: 22px;
          color: #aeb3bd;
          font-size: 14px;
          line-height: 1.8;
        }

        .bsp-offer-detail {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding-left: 30px;
          border-left: 1px solid #303037;
        }

        .bsp-offer-detail > span {
          color: #60a5fa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .bsp-offer-detail strong {
          display: block;
          color: #fff;
          font-size: 15px;
        }

        .bsp-offer-detail p {
          margin-top: 4px;
          color: #9ca3af;
          font-size: 12px;
          line-height: 1.7;
        }

        .bsp-terms-link {
          align-self: flex-start;
          color: #93c5fd;
          font-size: 12px;
          font-weight: 700;
        }

        .bsp-terms-link:hover {
          color: #fff;
        }

        .bsp-timeline-heading {
          margin-top: 85px;
        }

        .bsp-timeline-heading h3 {
          margin-top: 12px;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: -0.04em;
        }

        .bsp-timeline {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 36px;
        }

        .bsp-stage {
          padding-top: 24px;
          border-top: 2px solid #2563eb;
        }

        .bsp-stage-number {
          color: #2563eb;
          font-size: 12px;
          font-weight: 800;
        }

        .bsp-stage-date {
          margin-top: 14px;
          color: #737987;
          font-size: 11px;
          font-weight: 700;
        }

        .bsp-stage h4 {
          margin-top: 12px;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .bsp-stage p {
          margin-top: 10px;
          color: #626978;
          font-size: 13px;
          line-height: 1.8;
        }

        .bsp-bottom-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 65px;
          padding-top: 28px;
          border-top: 1px solid #d8dde5;
        }

        .bsp-bottom-cta p {
          color: #0b0b0d;
          font-size: 19px;
          font-weight: 800;
        }

        @media (max-width: 800px) {
          .bsp-section {
            padding: 75px 0;
          }

          .bsp-heading-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .bsp-offer {
            grid-template-columns: 1fr;
            gap: 35px;
            margin-top: 50px;
            padding: 32px;
          }

          .bsp-offer-detail {
            padding-left: 0;
            padding-top: 26px;
            border-left: 0;
            border-top: 1px solid #303037;
          }

          .bsp-timeline {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .bsp-stage {
            padding-top: 18px;
          }

          .bsp-bottom-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .bsp-container {
            width: calc(100% - 32px);
          }

          .bsp-offer {
            padding: 24px 20px;
          }

          .bsp-offer h3 {
            font-size: 38px;
          }

          .bsp-bottom-cta p {
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}