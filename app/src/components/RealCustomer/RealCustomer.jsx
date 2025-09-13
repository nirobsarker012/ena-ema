import React from "react";
import RealCustomerFrom from "./RealCustomerFrom";
import RealCustomerSatisfaction from "./RealCustomerSatisfaction";

const RealCustomer = () => {
  return (
    <section className="relative container">
      <div className="bg-primary/5 w-[600px] -top-20 -left-90 h-[800px] blur-3xl rounded-full absolute hidden xl:block"></div>
      <div className="absolute bg-primary/5 w-[600px] -top-20 -right-90 h-[800px] blur-3xl rounded-full hidden xl:block"></div>

      <div className="">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Real Customer Title */}
          <h1 className="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-client-text leading-snug md:leading-tight mt-6 max-w-3xl lg:max-w-[1066px]">
            Ready to Turn Visitors Into{" "}
            <span className="text-primary">Real Customers?</span>
          </h1>

          {/* RealCustom Desc */}
          <p className="max-w-2xl md:max-w-3xl lg:max-w-4xl text-text-secondary-light mt-4 text-sm sm:text-base md:text-lg">
            Don't settle for an average page. Get a premium, conversion-focused
            landing page that pays for itself.
          </p>
        </div>
        {/* RealCustomer From */}
        <RealCustomerFrom />
        {/* Customer Satisfaction */}
        <RealCustomerSatisfaction />
      </div>
    </section>
  );
};

export default RealCustomer;
