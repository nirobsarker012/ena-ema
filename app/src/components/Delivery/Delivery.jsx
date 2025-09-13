import React from "react";
import DeliveryCart from "./DeliveryCart";

const Delivery = () => {
  return (
    <section className="py-[120px] relative">
      <div className="bg-primary/5 w-[600px] -left-50 h-[400px] blur-3xl rounded-full absolute"></div>

      <div className="flex flex-col items-center justify-center text-center text-[#F5F5F5] gap-y-2 mt-8 sm:mt-12 lg:mt-16">
        {/* Title */}
        <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-snug">
          From Idea to Live Landing Page in{" "}
          <span className="text-primary">Just 5 Days</span>
        </h1>
        {/* Desc */}
        <p className="text-sm sm:text-base font-general md:text-[16px] max-w-2xl mt-2">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
      </div>
      {/* Delivery Cart */}
      <DeliveryCart />
    </section>
  );
};

export default Delivery;
