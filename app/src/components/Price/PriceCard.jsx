import React from "react";
import { priceCardData } from "../../data/indexData";

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
          <button className="flex items-center justify-center gap-2 bg-[#003D25] rounded-lg py-3 sm:py-4 w-full text-[#00E58A] mt-8 sm:mt-10 lg:mt-[46px] hover:bg-primary hover:text-text-light hover:rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-[0_6px_18px_#1fffa5]/30">
            {data.btnTitle}
            {/* Inline SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <path d="M21.8486 13.7548L15.0986 20.5048C14.8872 20.7162 14.6006 20.8349 14.3017 20.8349C14.0028 20.8349 13.7161 20.7162 13.5048 20.5048C13.2935 20.2935 13.1747 20.0069 13.1747 19.708C13.1747 19.4091 13.2935 19.1224 13.5048 18.9111L18.3339 14.0839H4.55261C4.25424 14.0839 3.9681 13.9654 3.75712 13.7544C3.54614 13.5434 3.42761 13.2573 3.42761 12.9589C3.42761 12.6605 3.54614 12.3744 3.75712 12.1634C3.9681 11.9524 4.25424 11.8339 4.55261 11.8339H18.3339L13.5067 7.0039C13.2953 6.79256 13.1766 6.50592 13.1766 6.20703C13.1766 5.90814 13.2953 5.6215 13.5067 5.41015C13.718 5.19881 14.0047 5.08008 14.3035 5.08008C14.6024 5.08008 14.8891 5.19881 15.1004 5.41015L21.8504 12.1602C21.9553 12.2648 22.0385 12.3892 22.0952 12.5261C22.1519 12.663 22.181 12.8097 22.1808 12.9579C22.1807 13.1061 22.1512 13.2527 22.0942 13.3895C22.0372 13.5263 21.9537 13.6504 21.8486 13.7548Z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
