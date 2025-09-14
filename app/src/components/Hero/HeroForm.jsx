import React from "react";
import { heroFormItem } from "../../data/indexData";
import Image from "next/image";

const HeroForm = () => {
  return (
    <section className="mt-12 px-4">
      <div className="bg-card-bg border border-text-secondary-light/30 w-full max-w-5xl mx-auto rounded-lg shadow-[0_6px_18px_#1fffa5]/20 p-6 md:p-10">
        <form className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4 w-full">
          {heroFormItem.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-[48%] lg:w-[232px]"
            >
              <input
                type="text"
                placeholder={item.title}
                className="w-full font-general text-text-secondary-light border border-text-secondary-light/30 py-4 px-10 rounded-md hover:border-primary ease-in-out duration-300 outline-none bg-transparent"
              />
              <div className="absolute top-4 left-3">
                <Image
                  width={16}
                  height={16}
                  src={item.icon}
                  alt={item.title}
                  className="inline-block"
                />
              </div>
            </div>
          ))}
        </form>
        <button
          className="mt-6 font-general w-full inline-flex justify-center text-[12px] px-1.5 lg:px-0 items-center gap-3 bg-primary py-4 text-primary-dark lg:text-[16px] rounded-lg font-medium hover:rounded-2xl transition-all duration-300 hover:gap-5 cursor-pointer"
          type="submit"
        >
          Get my high-converting landing page
          <img
            src="/assets/icons/ArrowRight.svg"
            alt="Arrow"
            className="size-4"
          />
        </button>
      </div>
    </section>
  );
};

export default HeroForm;
