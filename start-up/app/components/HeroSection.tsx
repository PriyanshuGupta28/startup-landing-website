import React from "react";
import heroimg from "~/images/heroImg.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between h-[500px] gap-3">
      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center md:items-start">
        <h1 className="text-5xl font-bold text-center md:text-left">
          Digital Solution
        </h1>
        <p className="mt-5 text-zinc-400 dark:text-zinc-300 text-lg text-center md:text-left">
          We’re designing digital experiences that enrich human lives and it
          helps to grow your business globally trends.
        </p>
      </div>
      <div className="flex w-[100%] h-[100%]">
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
