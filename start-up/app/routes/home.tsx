import type { Route } from "./+types/home";
import HeroSection from "~/components/HeroSection";

export function meta({ data }: Route.MetaArgs) {
  return [
    // Basic SEO tags
    { title: "Start Up | Modern Business Solutions" },
    {
      name: "description",
      content:
        "Start Up helps businesses grow with innovative solutions, expert consulting, and digital transformation services.",
    },

    // OpenGraph tags for social sharing
    { property: "og:title", content: "Start Up | Modern Business Solutions" },
    {
      property: "og:description",
      content:
        "Start Up helps businesses grow with innovative solutions, expert consulting, and digital transformation services.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://startup.com" },
    { property: "og:image", content: "https://startup/og-image.jpg" },

    // Twitter Card tags
    { name: "twitter:card", content: "startup" },
    { name: "twitter:title", content: "Start Up | Modern Business Solutions" },
    {
      name: "twitter:description",
      content:
        "Start Up helps businesses grow with innovative solutions, expert consulting, and digital transformation services.",
    },

    // Additional SEO tags
    {
      name: "keywords",
      content:
        "business solutions, consulting, digital transformation, startup, innovation",
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { canonical: "https://collabbros.com" },
  ];
}

export default function Home({}: Route.ComponentProps) {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="w-[80%]">
        <HeroSection />
      </div>
    </div>
  );
}
