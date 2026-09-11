import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InsightBolt — Marketing That Makes Sense",
  description:
    "InsightBolt helps growing businesses turn attention into enquiries and customers through content, campaigns and marketing that has a reason behind it.",
  keywords: [
    "social media marketing",
    "content marketing",
    "digital marketing",
    "marketing strategy",
    "Instagram marketing",
    "InsightBolt",
  ],
  authors: [{ name: "InsightBolt" }],
  creator: "InsightBolt",
  metadataBase: new URL("https://insightbolt-marketing.vercel.app"),
  openGraph: {
    title: "InsightBolt — Marketing That Makes Sense",
    description:
      "For businesses people think about before they buy.",
    url: "https://insightbolt-marketing.vercel.app",
    siteName: "InsightBolt",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}