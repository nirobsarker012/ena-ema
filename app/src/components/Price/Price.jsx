import React from "react";
import PriceCard from "./PriceCard";
import { motion } from "motion/react";

const Price = () => {
  return (
    <section>
      <div className="container mt-[60px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-manrope font-medium text-[38px] lg:text-[48px] text-shadow-client-text">
            Simple,Transparent Pricing —{" "}
            <span className="text-primary">Choose Your Plan</span>
          </h1>
          <p className="mt-2 mb-[48px] font-general text-shadow-client-text text-[16px]">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </motion.div>
        {/* Price Card section */}
        <PriceCard />
      </div>
    </section>
  );
};

export default Price;
