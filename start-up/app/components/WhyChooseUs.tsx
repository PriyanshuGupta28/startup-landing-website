import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";

export default function WhyChooseUs() {
  const stats = [
    {
      label: "Strategy",
      percentage: 60,
      description:
        "Adopting a customer-centric approach, understanding their needs, and providing tailored solutions will enhance customer satisfaction and loyalty.",
    },
    {
      label: "Audience",
      percentage: 95,
      description:
        "The ideal audience for our organization encompasses a broad range of individuals and organizations seeking technological solutions and expertise.",
    },
    {
      label: "Values",
      percentage: 70,
      description:
        "We value innovation, constantly seeking new and creative solutions to drive technological advancement and address the challenges.",
    },
  ];

  const socialMedia = ["Google", "Linkedin", "Instagram"];

  return (
    <section className="p-6 md:p-12 bg-background text-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="mt-4 text-lg">
          <span className="block font-semibold uppercase tracking-wider text-muted-foreground">
            THE COMPANY UNDERSTANDS THAT EVERY BUSINESS IS UNIQUE.
          </span>
          What sets Nilank Technologies apart is its customer-centric approach
          to service delivery. Hence, it takes a personalized approach to every
          project, ensuring that each client receives a customized solution that
          meets their specific requirements.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {socialMedia.map((media, index) => (
            <span
              key={index}
              className={cn(
                "px-4 py-2 rounded-md font-medium",
                "bg-muted hover:bg-muted/80 text-primary hover:text-zinc-950 dark:hover:text-zinc-200 transition"
              )}
            >
              {media}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle>{stat.label}</CardTitle>
              <CardDescription>{stat.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={stat.percentage} className="mt-4" />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.percentage}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
