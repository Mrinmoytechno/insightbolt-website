import Link from "next/link";
import LatestInsights from "@/components/insights/LatestInsights";
import { getAllInsights } from "@/lib/insights";

export default function Work() {
  const projects = getAllInsights();

  return (
    <section
      className="work-section section-light"
      id="work"
    >
      <div className="section-shell">

        <div className="work-heading">
          <div className="section-eyebrow">
            INSIGHTS / WORK
          </div>

          <h2>IDEAS BACKED BY RESEARCH.</h2>

          <p>
            Explore the thinking behind the work —
            independent brand analyses, strategic
            directions and creative concepts built
            around how people make decisions.
          </p>
        </div>

        <LatestInsights projects={projects.slice(0, 10)} />

        <div className="work-library">

          <div className="work-library-copy">
            <div className="section-eyebrow">
              THE FULL LIBRARY
            </div>

            <h3>
              More thinking. More perspectives.
              All in one place.
            </h3>
          </div>

          <Link
            href="/insights"
            className="button button-primary"
          >
            Explore All <span aria-hidden="true">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}