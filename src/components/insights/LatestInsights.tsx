"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { InsightProject } from "@/lib/insights";

export default function LatestInsights({
  projects,
}: {
  projects: InsightProject[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (paused || projects.length < 2) return;

    const timer = window.setInterval(
      () => move(1),
      5000
    );

    return () => window.clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, projects.length]);

  function move(direction: number) {
    const track = trackRef.current;

    if (!track) return;

    const firstCard =
      track.querySelector<HTMLElement>(".insight-card");

    if (!firstCard) return;

    const step = firstCard.offsetWidth + 18;

    const max = Math.max(
      0,
      track.scrollWidth - track.clientWidth
    );

    const next =
      track.scrollLeft + direction * step;

    if (direction > 0 && next >= max - 4) {
      track.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      setActive(0);
    } else {
      track.scrollTo({
        left: Math.max(0, next),
        behavior: "smooth",
      });

      setActive(
        Math.max(0, Math.round(next / step))
      );
    }
  }

  function handleScroll() {
    const track = trackRef.current;

    const card =
      track?.querySelector<HTMLElement>(".insight-card");

    if (track && card) {
      setActive(
        Math.round(
          track.scrollLeft / (card.offsetWidth + 18)
        )
      );
    }
  }

  return (
    <div
      className="latest-insights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {projects.length ? (
        <>
          <div className="latest-insights-topline">

            <span>
              {String(
                Math.min(projects.length, 10)
              ).padStart(2, "0")}{" "}
              LATEST PROJECTS
            </span>

            <div className="insight-carousel-controls">

              <button
                type="button"
                aria-label="Previous projects"
                onClick={() => move(-1)}
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next projects"
                onClick={() => move(1)}
              >
                →
              </button>

            </div>
          </div>

          <div
            className="insight-carousel-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {projects.slice(0, 10).map((project) => (
              <article
                className="insight-card"
                key={project.slug}
              >

                <div className="insight-card-brand-row">

                  <div className="insight-brand-mark">

                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`${project.brand} logo`}
                        width={56}
                        height={56}
                      />
                    ) : (
                      <span>
                        {project.brandInitials}
                      </span>
                    )}

                  </div>

                  <div className="insight-brand-name">
                    {project.brand}
                  </div>

                  <span className="insight-card-date">
                    {new Intl.DateTimeFormat("en", {
                      month: "short",
                      year: "numeric",
                    }).format(new Date(project.date))}
                  </span>

                </div>

                <div className="insight-card-copy">

                  <div className="insight-card-labels">
                    <span>{project.type}</span>
                    <span>{project.industry}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                </div>

                <div className="insight-card-footer">

                  <div className="insight-card-tags">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    href={`/insights/${project.slug}?from=${encodeURIComponent("/#work")}`}
                    className="insight-read-link"
                  >
                    Read <span aria-hidden="true">→</span>
                  </Link>

                </div>

              </article>
            ))}
          </div>

          <div
            className="insight-carousel-progress"
            aria-label={`Project ${Math.min(
              active + 1,
              projects.length
            )} of ${projects.length}`}
          >
            {projects.slice(0, 10).map((project, index) => (
              <span
                key={project.slug}
                className={
                  index === active ? "is-active" : ""
                }
              />
            ))}
          </div>

        </>
      ) : (
        <div className="insight-empty-state">

          <p>
            New analyses and creative explorations
            will appear here as they are published.
          </p>

        </div>
      )}
    </div>
  );
}