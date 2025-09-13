import React from "react";
import { priceCardData } from "../../data/indexData";
import Image from "next/image";

const PriceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-0">
      {priceCardData.map((data) => (
        <div
          key={data.id}
          className={`bg-card-bg rounded-2xl relative p-6 sm:p-8 lg:p-9 w-full max-w-[368px] mx-auto ${
            data.isPopular ? "border-2 border-primary" : ""
          }`}
        >
          {data.isPopular && (
            <span className="absolute top-0 left-10 -translate-y-1/2 border-2 border-primary py-1 px-2 rounded-4xl bg-card-bg text-primary text-[12px]">
              Most Popular
            </span>
          )}
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-3.5">
              <h3 className="font-manrope text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                {data.name}
              </h3>
              <p className="text-sm sm:text-base font-general text-client-text">
                {data.desc}
              </p>
            </div>
            <span className="font-manrope text-primary text-xl sm:text-2xl font-bold">
              ${data.price}
            </span>
          </div>

          {/* Divider */}
          <div className="bg-[#2A3C36] h-px my-8 sm:my-10 lg:my-[52px]" />

          {/* Price List */}
          <div className="flex flex-col items-start space-y-4">
            {data.priceLink.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-xs sm:text-sm"
              >
                <span className="block bg-primary w-1.5 h-1.5 rounded-full"></span>
                <span className="text-text-secondary-light font-general">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-[#003D25] rounded-lg py-3 sm:py-4 w-full text-[#00E58A] mt-8 sm:mt-10 lg:mt-[46px] hover:bg-primary hover:text-text-light hover:rounded-2xl hover:transition-all hover:duration-300">
            {data.btnTitle}
            <Image
              src={data.icon}
              alt="icon"
              width={18}
              height={18}
              className="inline-block transition-all duration-300"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
