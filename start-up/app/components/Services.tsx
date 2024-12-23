import React from "react";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {ServiceCardData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            tools={service.tools}
          />
        ))}
      </div>
    </>
  );
};

export default Services;

const ServiceCardData = [
  {
    title: "Website Development",
    description:
      "There are many different aspects to website development, from the initial planning stages to the finished product. We leverage the latest technologies, frameworks, and coding practices to create high-quality websites that are not only visually stunning but also user-friendly and functional.",
    tools: [
      "Backend Development",
      "Front End Development",
      "React.js",
      "Next.js",
      "Remix js",
      "NodeJS",
      "Express js",
      "MongoDB",
      "PostgreSQL",
      "JavaScript",
      "Frameworks",
    ],
  },
  {
    title: "Search Engine Optimization",
    description:
      "The method of increasing a website’s ranking on search engines is known as search engine optimization, or SEO. Our core focus is to enhance the online visibility and organic search rankings of our client's websites. We understand the importance of search engine optimization in driving targeted traffic and attracting potential customers.",
    tools: [
      "Business Listing",
      "On-page Optimization",
      "Search Engine Optimization",
      "Off-page Optimization",
    ],
  },
  {
    title: "Graphic Designing And UI/UX",
    description:
      "Visual communication and problem solving through typography, photography, and illustration are at the heart of graphic design. We understand that design plays a critical role in capturing the attention of the target audience and leaving a lasting impression. Our team of skilled graphic designers combines creativity, technical expertise, and a deep understanding of our clients' needs to deliver exceptional design solutions.",
    tools: [
      "Figma",
      "Web UI/UX",
      "Applications UI/UX",
      "Logo Design",
      "Product Label Design",
      "Brochure",
      "Business Card",
      "Posters",
      "Animated Video",
    ],
  },
];
