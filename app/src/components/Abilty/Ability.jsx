import React from "react";
import LinghtIcon from "../../assets/icons/Lightning-primary.svg";
import Image from "next/image";
import RightIcon from "../../assets/icons/ArrowRight.svg";

const Ability = () => {
  return (
    <section className="container my-12 sm:my-16 lg:my-[48px]">
      {/* Top Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-[20px]">
        <Image
          src={LinghtIcon}
          alt="Limited Icon"
          className="w-6 sm:w-8 lg:w-auto h-auto"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="font-manrope text-xl sm:text-2xl lg:text-[28px] font-bold">
            Limited Availability
          </h3>
          <p className="text-text-secondary-light font-general text-sm sm:text-base lg:text-[14px] max-w-[600px]">
            We only onboard 5 new clients per month. 2 spots left for this month
            — secure yours today.
          </p>
        </div>
      </div>

      {/* Ability Box */}
      <div className="py-8 sm:py-12 lg:py-[48px] bg-[#192420] rounded-2xl mt-8 sm:mt-12 lg:mt-[48px]">
        {/* Content */}
        <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12">
          <h1 className="font-manrope font-medium text-2xl sm:text-3xl lg:text-[48px] mt-2">
            Special Offer For Early Clients
          </h1>
          <p className="text-sm sm:text-base lg:text-[16px] font-general mt-3">
            Get 10% OFF + Free Hosting Setup when you book this week.
          </p>
          <button className="inline-flex font-general mt-6 sm:mt-8 lg:mt-[48px] justify-center text-xs sm:text-sm lg:text-[16px] px-6 sm:px-8 py-3 sm:py-4 items-center gap-2 sm:gap-3 bg-primary text-primary-dark rounded-lg font-medium hover:rounded-2xl transition-all duration-300 hover:gap-4 sm:hover:gap-5 cursor-pointer">
            Claim my 10% discount
            <Image
              src={RightIcon}
              alt="Arrow Right"
              className="w-4 sm:w-5 lg:w-auto h-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ability;
