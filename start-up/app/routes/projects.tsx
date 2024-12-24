import React from "react";
import { Code, Layers, Globe, Smartphone } from "lucide-react";
import type { Route } from "./+types/projects";

export const meta = ({ data }: Route.MetaArgs) => {
  return [
    { title: "Projects | Start Up" },
    {
      name: "description",
      content: "Discover our latest projects and solutions.",
    },

    // OpenGraph tags for social sharing and SEO
    { property: "og:title", content: "Projects | Start Up" },
    {
      property: "og:description",
      content: "Discover our latest projects and solutions.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://startup.com/projects" },
    { property: "og:image", content: "https://startup.com/og-image.jpg" },

    // Twitter Card tags
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Projects | Start Up" },
    {
      name: "twitter:description",
      content: "Discover our latest projects and solutions.",
    },
  ];
};

const projects = [
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites with modern technologies.",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    description: "Crafting intuitive and feature-rich mobile applications.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces for an enhanced user experience.",
    icon: Layers,
  },
  {
    title: "Global Solutions",
    description: "Delivering scalable and efficient solutions worldwide.",
    icon: Globe,
  },
];

const ProjectsPage: React.FC<Route.ComponentProps> = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Our Projects
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A showcase of our latest and most impactful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-zinc-700 rounded-full mb-4">
                <project.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
