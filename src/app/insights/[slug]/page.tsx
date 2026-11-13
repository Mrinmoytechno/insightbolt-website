import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  formatInsightDate,
  getAllInsights,
  getInsightBySlug,
  getInsightSlugs,
} from "@/lib/insights";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = getInsightBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | InsightBolt",
    };
  }

  return {
    title: `${project.brand} — ${project.title} | InsightBolt`,
    description: project.description,
  };
}

export default async function InsightDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;

  const project = getInsightBySlug(slug);

  if (!project) notFound();

  const all = getAllInsights();

  const index = all.findIndex(
    (item) => item.slug === slug
  );

  const previous = all[index - 1];
  const next = all[index + 1];

  const safeReturn =
    from &&
    from.startsWith("/") &&
    !from.startsWith("//")
      ? from
      : "/insights";

  return (
    <>
      <Navbar />

      <main className="insight-detail-page">

        <div className="insight-detail-shell">

          <Link
            href={safeReturn}
            className="insights-back-link"
          >
            ← Back to{" "}
            {safeReturn === "/" ||
            safeReturn.startsWith("/#")
              ? "homepage"
              : "all insights"}
          </Link>

          <header className="insight-detail-hero">

            <div className="insight-detail-brandline">

              <div className="insight-brand-mark">

                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.brand} logo`}
                    width={56}
                    height={56}
                  />
                ) : (
                  <span>{project.brandInitials}</span>
                )}

              </div>

              <div>
                <strong>{project.brand}</strong>

                <span>
                  {project.industry} ·{" "}
                  {formatInsightDate(project.date)}
                </span>
              </div>

            </div>

            <div className="insight-card-labels">
              <span>{project.type}</span>

              <span>
                {project.readingTime ??
                  "Research & strategy"}
              </span>
            </div>

            <h1>{project.title}</h1>

            <p className="insight-detail-deck">
              {project.description}
            </p>

            <div className="insight-detail-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {project.disclosure && (
              <aside className="insight-disclosure">

                <strong>
                  INDEPENDENCE &amp; DISCLOSURE
                </strong>

                <p>{project.disclosure}</p>

              </aside>
            )}

          </header>

          <article className="insight-article">

            {project.summary && (
              <div className="insight-summary">

                <span>THE CENTRAL IDEA</span>

                <p>{project.summary}</p>

              </div>
            )}

            {project.sections.map((section, i) => (
              <section
                className="insight-article-section"
                key={`${section.heading}-${i}`}
              >

                <h2>{section.heading}</h2>

                {section.paragraphs?.map(
                  (paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  )
                )}

                {section.bullets && (
                  <ul>
                    {section.bullets.map(
                      (bullet, j) => (
                        <li key={j}>{bullet}</li>
                      )
                    )}
                  </ul>
                )}

              </section>
            ))}

            {project.creatives?.length ? (
              <section className="insight-creative-section">

                <div className="section-eyebrow">
                  CREATIVE EXPLORATIONS
                </div>

                <h2>
                  THREE CAMPAIGN DIRECTIONS.
                </h2>

                <p className="insight-creative-intro">
                  Speculative creative concepts developed
                  to demonstrate possible applications
                  of the strategy. These are not
                  commissioned or approved advertisements.
                </p>

                <div className="insight-creative-grid">

                  {project.creatives.map(
                    (creative, i) => (
                      <article
                        className={`insight-creative-card insight-creative-card-${i + 1}`}
                        key={creative.name}
                      >

                        <div className="creative-concept-art">

                          <span>
                            CONCEPT 0{i + 1}
                          </span>

                          <strong>
                            {creative.headline}
                          </strong>

                          <small>
                            {creative.supporting}
                          </small>

                          <i>{creative.name}</i>

                        </div>

                        <div className="creative-concept-copy">

                          <h3>{creative.name}</h3>

                          <dl>

                            <dt>OBJECTIVE</dt>
                            <dd>{creative.objective}</dd>

                            <dt>AUDIENCE</dt>
                            <dd>{creative.audience}</dd>

                            <dt>STRATEGIC THINKING</dt>
                            <dd>{creative.strategy}</dd>

                            <dt>VISUAL DIRECTION</dt>
                            <dd>{creative.visual}</dd>

                          </dl>

                        </div>

                      </article>
                    )
                  )}

                </div>
              </section>
            ) : null}

            {project.limitations?.length ? (
              <section className="insight-article-section insight-limitations">

                <h2>Limitations &amp; assumptions</h2>

                <ul>
                  {project.limitations.map(
                    (item, i) => (
                      <li key={i}>{item}</li>
                    )
                  )}
                </ul>

              </section>
            ) : null}

            {project.sources?.length ? (
              <section className="insight-article-section insight-sources">

                <h2>Sources</h2>

                <ul>
                  {project.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>

              </section>
            ) : null}

          </article>

          <nav
            className="insight-project-navigation"
            aria-label="Project navigation"
          >

            <div>
              {previous && (
                <Link
                  href={`/insights/${previous.slug}?from=${encodeURIComponent(
                    safeReturn
                  )}`}
                >
                  <span>← PREVIOUS PROJECT</span>
                  <strong>{previous.brand}</strong>
                </Link>
              )}
            </div>

            <div>
              {next && (
                <Link
                  href={`/insights/${next.slug}?from=${encodeURIComponent(
                    safeReturn
                  )}`}
                >
                  <span>NEXT PROJECT →</span>
                  <strong>{next.brand}</strong>
                </Link>
              )}
            </div>

          </nav>

          <div className="insight-detail-end">

            <span>
             INSIGHTS &amp; WORK
            </span>

            <Link href="/insights">
              Explore all projects →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}