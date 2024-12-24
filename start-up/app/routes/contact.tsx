import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

const ContactUsPage = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            We would love to hear from you! Reach out to us for any inquiries or
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Get in Touch
            </h2>
            <form className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-zinc-950 dark:text-white font-semibold rounded-lg shadow-md transition"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  123 Street, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  +123 456 7890
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-zinc-950 dark:text-white mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  contact@example.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
