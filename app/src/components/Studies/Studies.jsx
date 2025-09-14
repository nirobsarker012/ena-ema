import React from "react";
import StudiesSlider from "./StudiesSlider";
import RightIcon from "../../assets/icons/ArrowRight.svg";
import Image from "next/image";

const Studies = () => {
  return (
    <section className="container">
      <div className="flex items-center container justify-center flex-col text-center space-y-2">
        {/* Title */}
        <h1 className="font-manrope font-medium text-[48px] text-client-text">
          Case Studies
        </h1>
        {/* Desc */}
        <p className="font-general text-[16px] text-client-text">
          See the designs that delivered results
        </p>
      </div>
      {/* Studies Slieder */}
      <StudiesSlider />
      {/* Btn */}
      <div className=" contaier max-w-[244px] mx-auto">
        <button className="mt-6 shadow-[0_6px_18px_#1fffa5]/30 font-general mb-[120px] w-full inline-flex justify-center text-[12px] px-1.5 lg:px-0 items-center gap-3 bg-primary py-4 text-primary-dark lg:text-[16px] rounded-lg font-medium hover:rounded-2xl transition-all duration-300 hover:gap-5 cursor-pointer">
          I want similar results
          <Image src={RightIcon} alt="rightIcon" />
        </button>
      </div>
    </section>
  );
};

export default Studies;
