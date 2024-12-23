import React from "react";
import heroimg from "~/images/heroImg.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between h-[500px] gap-3 mt-32 md:mt-0">
      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center md:items-start">
        <h1
          className="text-5xl font-bold text-center md:text-left"
          role="heading"
          aria-label="Digital Solution"
        >
          Digital Solution
        </h1>
        <p
          className="mt-5 text-zinc-500 dark:text-zinc-300 text-lg text-center md:text-left"
          role="contentinfo"
          aria-label="We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends."
        >
          We’re designing digital experiences that enrich human lives and it
          helps to grow your business globally trends.
        </p>
        <p
          className="mt-5 text-zinc-500 dark:text-zinc-300 text-lg text-center md:text-left"
          role="contentinfo"
          aria-label="CLOUD | FRONT END | BACKEND | FULL STACK | ML"
        >
          CLOUD | FRONT END | BACKEND | FULL STACK | ML
        </p>
      </div>
      <div className="flex w-[100%] h-[100%]" role="img" aria-label="hero">
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
