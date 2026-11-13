import fs from "node:fs";
import path from "node:path";

export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type InsightCreative = {
  name: string;
  headline: string;
  supporting: string;
  objective: string;
  audience: string;
  strategy: string;
  visual: string;
  image?: string;
};

export type InsightProject = {
  slug: string;
  title: string;
  brand: string;
  brandInitials: string;
  logo?: string;
  date: string;
  type: string;
  industry: string;
  tags: string[];
  description: string;
  published: boolean;
  disclosure?: string;
  readingTime?: string;
  summary?: string;
  sections: InsightSection[];
  creatives?: InsightCreative[];
  sources?: {
    label: string;
    url: string;
  }[];
  limitations?: string[];
};

const CONTENT_DIR = path.join(
  process.cwd(),
  "content",
  "insights"
);

export function getAllInsights(): InsightProject[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(
        CONTENT_DIR,
        file
      );

      return JSON.parse(
        fs.readFileSync(fullPath, "utf8")
      ) as InsightProject;
    })
    .filter((project) => project.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getInsightBySlug(
  slug: string
): InsightProject | undefined {
  return getAllInsights().find(
    (project) => project.slug === slug
  );
}

export function getInsightSlugs(): string[] {
  return getAllInsights().map(
    (project) => project.slug
  );
}

export function formatInsightDate(
  date: string
): string {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}