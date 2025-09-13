import React from "react";
import { businessData } from "../../data/indexData";
import Image from "next/image";

const BusinessCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[36px] mt-[48px] mb-[120px]">
      {businessData.map((card) => (
        <div
          key={card.id}
          className="p-6 bg-card-bg rounded-[24px] border border-transparent hover:border-primary transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex flex-col">
            <Image
              src={card.icon}
              alt={card.title}
              className="w-[48px] mb-[36px]"
            />
            <h3 className="font-manrope text-[16px] mb-3">{card.title}</h3>
            <p className="text-[14px] font-general text-text-secondary-light max-w-[328px]">
              {card.desc}
            </p>
          </div>
          {/* Card Blur Effect */}
          <div className="absolute -bottom-30 right-30 w-[180px] h-[150px] bg-primary opacity-0 group-hover:opacity-30 blur-3xl pointer-events-none transform transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
