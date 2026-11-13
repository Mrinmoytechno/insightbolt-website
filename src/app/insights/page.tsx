import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsLibrary from "@/components/insights/InsightsLibrary";

import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights & Work | InsightBolt",
  description:
    "Explore independent marketing analyses, strategy and creative concepts from InsightBolt.",
};

export default function InsightsPage() {
  const projects = getAllInsights();

  return (
    <>
      <Navbar />

      <main className="insights-page">
        <div className="insights-page-shell">

          <Link
            href="/#work"
            className="insights-back-link"
          >
            ← Back to homepage
          </Link>

          <div className="insights-page-heading">

            <div className="section-eyebrow">
             THE LIBRARY
            </div>

            <h1>
              INSIGHTS &amp; WORK<span>.</span>
            </h1>

            <p>
              Research, observations, strategies and
              creative thinking — brought together
              in one place.
            </p>

          </div>

          <InsightsLibrary projects={projects} />

        </div>
      </main>

      <Footer />
    </>
  );
}