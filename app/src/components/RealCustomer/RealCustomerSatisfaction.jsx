import React from "react";
import { satisFaction } from "../../data/indexData";
import Image from "next/image";
const RealCustomerSatisfaction = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-[64px]">
        {satisFaction.map((item, index) => (
          <div key={index} className="flex  items-center gap-x-2">
            <Image
              src={item.icon}
              alt={item.title}
              className="text-white w-[16px] font-general"
            />
            <span className="text-text-secondary-light text-[12px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealCustomerSatisfaction;
