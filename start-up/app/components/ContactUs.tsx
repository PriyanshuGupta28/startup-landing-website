import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ContactUs: React.FC = () => {
  return (
    <>
      <CardTitle className="text-3xl font-bold text-center">
        Have You a Project in Mind?
      </CardTitle>
      <section className="flex items-center justify-center p-6 md:p-12 bg-background text-foreground">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-center">
              Contact With Us
            </CardTitle>
            <p className="mt-2 text-muted-foreground">
              Let’s make something great together! Fill out the form below to
              get in touch with us.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Project Type
                </label>
                <Select>
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="app">App Development </SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="w-full md:w-auto">
                  Contact with Us
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default ContactUs;
