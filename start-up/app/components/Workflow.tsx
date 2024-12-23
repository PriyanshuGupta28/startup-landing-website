import React from "react";
import { cn } from "~/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

const Workflow: React.FC = () => {
  const steps = [
    {
      step: "Step 01",
      number: "01",
      title: "Define Objectives and Goals",
      description:
        "Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound.",
    },
    {
      step: "Step 02",
      number: "02",
      title: "Conduct Market Research",
      description:
        "Understand your target audience's demographics, interests, and behavior.",
    },
    {
      step: "Step 03",
      number: "03",
      title: "Develop a Strategy",
      description:
        "Plan what type of content you will create, including blog posts, videos, social media posts, etc.",
    },
    {
      step: "Step 04",
      number: "04",
      title: "Create a Plan and Timeline",
      description: "Outline all tasks and assign responsibilities.",
    },
  ];

  return (
    <section className="my-12 p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Workflow</h2>
      <p className="text-center text-muted-foreground mb-12">How we work</p>
      <div className="relative border-l border-muted-foreground max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative mb-12 pl-8">
            <div className="absolute left-[-14px] text-[12px] top-0 w-6 h-6 bg-primary text-white dark:text-zinc-950 flex items-center justify-center rounded-full">
              {step.number}
            </div>
            <Card className="bg-background shadow-lg ">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {step.step}
                </CardTitle>
                <CardDescription className="text-sm font-medium">
                  {step.title}
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
