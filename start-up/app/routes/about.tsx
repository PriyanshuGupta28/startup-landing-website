import React from "react";
import { PersonStandingIcon, Target, Briefcase, Smile } from "lucide-react";

const AboutUsPage = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            About Us
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Learn more about our mission, values, and the people who make it all
            happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              To provide exceptional services and solutions that empower
              individuals and organizations to achieve their goals.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              To be a global leader recognized for innovation, quality, and
              excellence in everything we do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <PersonStandingIcon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Our Team
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Dedicated professionals who drive our success.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <Target className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Our Goals
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Setting high standards to deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Our Work
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Innovative solutions tailored to meet unique needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <Smile className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Our Values
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Integrity, innovation, and excellence guide our way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
