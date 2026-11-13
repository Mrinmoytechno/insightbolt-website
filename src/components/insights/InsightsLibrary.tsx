"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { InsightProject } from "@/lib/insights";

export default function InsightsLibrary({
  projects,
}: {
  projects: InsightProject[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [type, setType] = useState("All project types");
  const [industry, setIndustry] = useState("All industries");
  const [topic, setTopic] = useState("All topics");
  const [sort, setSort] = useState("newest");
  const [returnPath, setReturnPath] = useState("/insights");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setReturnPath(`${pathname}${window.location.search}`);
    setQuery(params.get("q") ?? "");
    setType(params.get("type") ?? "All project types");
    setIndustry(params.get("industry") ?? "All industries");
    setTopic(params.get("topic") ?? "All topics");
    setSort(params.get("sort") ?? "newest");
  }, []);

  function syncUrl(
    next: {
      q?: string;
      type?: string;
      industry?: string;
      topic?: string;
      sort?: string;
    }
  ) {
    const values = {
      q: query,
      type,
      industry,
      topic,
      sort,
      ...next,
    };

    const params = new URLSearchParams();

    if (values.q) params.set("q", values.q);

    if (values.type !== "All project types")
      params.set("type", values.type);

    if (values.industry !== "All industries")
      params.set("industry", values.industry);

    if (values.topic !== "All topics")
      params.set("topic", values.topic);

    if (values.sort !== "newest")
      params.set("sort", values.sort);

    const nextPath = `${pathname}${
      params.size ? `?${params.toString()}` : ""
    }`;

    setReturnPath(nextPath);

    router.replace(nextPath, {
      scroll: false,
    });
  }

  const types = useMemo(
    () => [
      "All project types",
      ...Array.from(
        new Set(projects.map((p) => p.type))
      ).sort(),
    ],
    [projects]
  );

  const industries = useMemo(
    () => [
      "All industries",
      ...Array.from(
        new Set(projects.map((p) => p.industry))
      ).sort(),
    ],
    [projects]
  );

  const topics = useMemo(
    () => [
      "All topics",
      ...Array.from(
        new Set(projects.flatMap((p) => p.tags))
      ).sort(),
    ],
    [projects]
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return projects
      .filter((p) => {
        const matchesText =
          !needle ||
          [
            p.title,
            p.brand,
            p.description,
            p.industry,
            p.type,
            ...p.tags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(needle);

        return (
          matchesText &&
          (type === "All project types" ||
            p.type === type) &&
          (industry === "All industries" ||
            p.industry === industry) &&
          (topic === "All topics" ||
            p.tags.includes(topic))
        );
      })
      .sort((a, b) =>
        sort === "oldest"
          ? new Date(a.date).getTime() -
            new Date(b.date).getTime()
          : new Date(b.date).getTime() -
            new Date(a.date).getTime()
      );
  }, [projects, query, type, industry, topic, sort]);

  function clearFilters() {
    setQuery("");
    setType("All project types");
    setIndustry("All industries");
    setTopic("All topics");
    setSort("newest");

    setReturnPath(pathname);

    router.replace(pathname, {
      scroll: false,
    });
  }

  return (
    <>
      <div className="library-toolbar">

        <label className="library-search">
          <span className="sr-only">
            Search projects
          </span>

          <span aria-hidden="true">⌕</span>

          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              syncUrl({ q: e.target.value });
            }}
            placeholder="Search brands, projects, industries or topics..."
          />
        </label>

        <div className="library-filters">

          <label>
            <span>PROJECT TYPE</span>

            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                syncUrl({ type: e.target.value });
              }}
            >
              {types.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>

          <label>
            <span>INDUSTRY</span>

            <select
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
                syncUrl({ industry: e.target.value });
              }}
            >
              {industries.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>

          <label>
            <span>TOPIC</span>

            <select
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                syncUrl({ topic: e.target.value });
              }}
            >
              {topics.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>

          <label>
            <span>SORT</span>

            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                syncUrl({ sort: e.target.value });
              }}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>

        </div>
      </div>

      <div className="library-results-line">
        <span>
          {filtered.length}{" "}
          {filtered.length === 1 ? "PROJECT" : "PROJECTS"}
        </span>

        <button
          type="button"
          onClick={clearFilters}
        >
          Clear filters ↗
        </button>
      </div>

      {filtered.length ? (
        <div className="library-grid">

          {filtered.map((project) => (
            <article
              className="insight-card library-card"
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
                    <span>{project.brandInitials}</span>
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
                  href={`/insights/${project.slug}?from=${encodeURIComponent(
                    returnPath
                  )}`}
                  className="insight-read-link"
                >
                  Read <span aria-hidden="true">→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>
      ) : (
        <div className="library-no-results">

          <span>NO MATCHES FOUND</span>

          <h3>
            Try a different search or filter.
          </h3>

          <p>
            We couldn't find a project matching
            those selections.
          </p>

          <button
            type="button"
            onClick={clearFilters}
          >
            Clear all filters →
          </button>

        </div>
      )}
    </>
  );
}