import React from "react";
import {
  Server,
  Smartphone,
  BarChart,
  FileText,
  Image,
  Cpu,
  Clipboard,
  Film,
  LifeBuoy,
  User,
  DollarSign,
  Book,
  Heart,
  Headphones,
  Users,
  File,
} from "lucide-react"; // Import specific icons

const services = [
  { name: "IT Outsourcing", icon: Server },
  { name: "Mobile Apps Development", icon: Smartphone },
  { name: "Digital Marketing", icon: BarChart },
  { name: "Content Writing", icon: FileText },
  { name: "Graphics & Web Designing", icon: Image },
  { name: "Engineering & Architecture", icon: Cpu },
  { name: "Data Entry", icon: Clipboard },
  { name: "Multimedia & Animation", icon: Film },
  { name: "IT Technical Support", icon: LifeBuoy },
  { name: "Virtual Assistant", icon: User },
  { name: "Finance and Accounts", icon: DollarSign },
  { name: "Legal Processes", icon: Book },
  { name: "Medical Processes", icon: Heart },
  { name: "BPO", icon: Headphones },
  { name: "HR & Recruitment", icon: Users },
  { name: "MS Office", icon: File },
];

const VirtualStaffingServices = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-gray-100">
          360° Virtual Staffing Services
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Hire a remote employee in any domain
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg shadow-sm bg-white dark:bg-zinc-950 border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4">
                <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {service.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VirtualStaffingServices;
