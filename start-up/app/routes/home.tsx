import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Route } from "./+types/home";
import HeroSection from "~/components/HeroSection";
import Services from "~/components/Services";
import Workflow from "~/components/Workflow";
import WhyChooseUs from "~/components/WhyChooseUs";
import ContactUs from "~/components/ContactUs";
import { Separator } from "~/components/ui/separator";
import VirtualStaffingServices from "~/components/VirtualStaffingServices";

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
    <div className="flex flex-col justify-between items-center ">
      <div className="w-[90%] md:w-[80%] flex flex-col gap-5">
        <HeroSection />
        <Services />
        <Separator className="my-4" />
        <h1 className="text-4xl font-bold text-center mt-10"> Our Stats </h1>
        <div className="flex items-center justify-center p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {StatsData.map((stat, index) => (
              <Card key={index} className="w-[250px]">
                <CardHeader>
                  <CardTitle>{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <Separator className="my-4" />
        <VirtualStaffingServices />
        <Separator className="my-4" />
        <Workflow />
        <Separator className="my-4" />
        <WhyChooseUs />
        <Separator className="my-4" />
        <ContactUs />
      </div>
    </div>
  );
}

const StatsData = [
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Happy Customers" },
  { value: "6", label: "Years of Experience" },
  { value: "8+", label: "Team Members" },
];
