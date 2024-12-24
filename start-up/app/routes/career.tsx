import React from "react";
import { Briefcase, Mail, MapPin } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "Work on building and maintaining modern web applications using React and Remix.",
      email: "careers@example.com",
    },
    {
      title: "Backend Developer",
      location: "On-site - New York",
      type: "Full-Time",
      description:
        "Develop scalable backend services using Node.js and Express.",
      email: "careers@example.com",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-Time",
      description:
        "Design user-friendly interfaces and ensure an optimal user experience.",
      email: "careers@example.com",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-Time",
      description:
        "Design user-friendly interfaces and ensure an optimal user experience.",
      email: "careers@example.com",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-Time",
      description:
        "Design user-friendly interfaces and ensure an optimal user experience.",
      email: "careers@example.com",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-Time",
      description:
        "Design user-friendly interfaces and ensure an optimal user experience.",
      email: "careers@example.com",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white">
          Join Our Team
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Explore exciting career opportunities and grow with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {job.title}
            </h2>
            <p className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-2" /> {job.location}
            </p>
            <p className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <Briefcase className="w-4 h-4 mr-2" /> {job.type}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {job.description}
            </p>
            <a
              href={`mailto:${job.email}`}
              className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            >
              <Mail className="w-4 h-4 mr-1 inline" /> Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
