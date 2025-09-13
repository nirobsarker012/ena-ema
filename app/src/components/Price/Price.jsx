import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <section>
      <div className="container mt-[60px]">
        <h1 className="font-manrope font-medium text-[48px] text-shadow-client-text">
          Simple,Transparent Pricing —{" "}
          <span className="text-primary">Choose Your Plan</span>
        </h1>
        <p className="mt-2 mb-[48px] text-shadow-client-text text-[16px]">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>
        {/* Price Card section */}
        <PriceCard />
      </div>
    </section>
  );
};

export default Price;
