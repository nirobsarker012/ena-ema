import React, { useState } from "react";
import { faqData } from "../../data/indexData";

const Faq = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordation = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h1 className="font-manrope text-[#F5F5F5] text-3xl sm:text-4xl lg:text-5xl text-center leading-snug">
            Got Questions <span className="text-primary">?</span> We’ve Got The
            Answers
          </h1>
        </div>
        {/* FAQ */}
        <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
          {faqData.map((data) => (
            <div
              key={data.id}
              className="bg-card-bg rounded-lg p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleAccordation(data.id)}
            >
              <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Always visible */}
                <span className="bg-primary w-3 aspect-square rounded-full"></span>
                <h3 className="font-manrope text-xl sm:text-[24px] font-bold">
                  {data.qus}
                </h3>

                {/* Answer, only visible if active */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeId === data.id
                      ? "max-h-[1000px] opacity-100 mt-3 sm:mt-4 lg:mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text-secondary-light font-general text-base sm:text-lg lg:text-[18px] leading-relaxed">
                    {data.ans}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
