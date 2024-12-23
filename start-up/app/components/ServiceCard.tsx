import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  tools: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tools,
}) => {
  return (
    <Card className="w-[350px] hover:scale-105 transition-all">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button>Get Started</Button> */}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
