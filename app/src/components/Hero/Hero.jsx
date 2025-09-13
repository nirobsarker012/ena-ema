import Image from "next/image";
import React from "react";
import SparkleIcon from "../../assets/icons/Sparkle-green.svg";
import HeroForm from "./HeroForm";
import HeroSatisFaction from "./HeroSatisFaction";

const Hero = () => {
  return (
    <main className="container px-4 md:px-6 lg:px-12">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center font-general text-text-secondary-light bg-card-bg py-2 px-4 gap-x-2 rounded-full border-t border-primary text-sm md:text-base">
          <Image src={SparkleIcon} alt="Spark" className="w-4 h-4" />
          Trusted by 30+ startups & entrepreneurs worldwide
        </span>

        {/* Hero Title */}
        <h1 className="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-client-text leading-snug md:leading-tight mt-6 max-w-3xl lg:max-w-5xl">
          Strategic Landing Pages That Convert From Just{" "}
          <span className="text-primary">$200</span>
        </h1>

        {/* Hero Desc */}
        <p className="max-w-2xl font-general md:max-w-3xl lg:max-w-4xl text-text-secondary-light mt-4 text-sm sm:text-base md:text-lg">
          Stop wasting traffic on generic pages. We deliver premium,
          conversion-focused landing pages designed, developed, and launched in
          just 5 days.
        </p>
      </div>

      {/* Hero Form */}
      <div className="flex items-center justify-center mt-8 w-full">
        <HeroForm />
      </div>

      {/* Hero Satisfaction */}
      <div className="mt-6 md:mt-10">
        <HeroSatisFaction />
      </div>
    </main>
  );
};

export default Hero;
