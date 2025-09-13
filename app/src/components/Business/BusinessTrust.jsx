import React from "react";
import BusinessCard from "./BusinessCard";

const BusinessTrust = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Business Trust Content */}
      <div className="flex flex-col items-center justify-center text-center text-[#F5F5F5] gap-y-2 mt-8 sm:mt-12 lg:mt-16">
        {/* Title */}
        <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-snug">
          Why Businesses <span className="text-primary">Trust Us</span> With
          Their Designs
        </h1>
        {/* Desc */}
        <p className="text-sm font-general sm:text-base md:text-[16px] max-w-2xl mt-2">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>
      {/* Cards */}
      <BusinessCard />
    </section>
  );
};

export default BusinessTrust;
