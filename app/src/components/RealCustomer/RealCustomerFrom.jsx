import React from "react";
import { heroFormItem } from "../../data/indexData";
const RealCustomerFrom = () => {
  return (
    <section className="mt-12 px-4">
      <div className="bg-card-bg border border-text-secondary-light/30 w-full max-w-4xl mx-auto rounded-lg shadow-primary-light p-6 md:p-10">
        <form className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4">
          {heroFormItem.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-[48%] lg:w-[232px]"
            >
              <input
                type="text"
                placeholder={item.title}
                className="w-full font-general text-text-secondary-light border border-text-secondary-light/30 py-4 px-10 rounded-md bg-transparent 
             outline-none focus:border-primary focus:ring-1 focus:ring-primary ease-in-out duration-300"
              />

              <div className="absolute top-4 left-3">
                <img
                  width={16}
                  height={16}
                  src={item.icon}
                  alt={item.title}
                  className="inline-block w-4 h-4"
                />
              </div>
            </div>
          ))}
        </form>
        <button
          className="mt-6 w-full font-general shadow-[0_6px_18px_#1fffa5]/30 inline-flex justify-center text-[12px] px-1.5 lg:px-0 items-center gap-3 bg-primary py-4 text-primary-dark lg:text-[16px] rounded-lg font-medium hover:rounded-2xl transition-all duration-300 hover:gap-5 cursor-pointer"
          type="submit"
        >
          Get my high-converting landing page
          <img
            src={"/assets/icons/ArrowRight.svg"}
            alt="right-icon"
            className="inline-block w-4 h-4"
          />
        </button>
      </div>
    </section>
  );
};

export default RealCustomerFrom;
