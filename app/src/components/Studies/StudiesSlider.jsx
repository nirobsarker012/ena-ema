import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { studiesData } from "../../data/indexData";

const StudiesSlider = () => {
  return (
    <div className="py-12">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {studiesData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="w-full max-w-full sm:max-w-[480px] md:max-w-[600px] lg:max-w-[730px] xl:max-w-[930px] p-3 bg-card-bg border border-text-secondary-light/10 rounded-[12px] h-full">
              <img
                src={data.macImage}
                alt={data.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="flex flex-col sm:flex-row justify-between mt-2 gap-2">
                <h1 className="text-base sm:text-lg md:text-xl font-bold font-manrope">
                  {data.title}
                </h1>
                <div className="flex flex-col gap-2 sm:gap-2">
                  <span className="bg-[#003D25] rounded-full py-2 px-4 text-text-secondary-light text-[10px] sm:text-[12px] font-manrope flex items-center">
                    <img
                      src={data.icon}
                      alt=""
                      className="inline-block font-general mr-2 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    {data.desc1}
                  </span>
                  <span className="bg-[#003D25] rounded-full py-2 px-4 text-text-secondary-light text-[10px] sm:text-[12px] font-manrope flex items-center">
                    <img
                      src={data.icon}
                      alt=""
                      className="inline-block font-general mr-2 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    {data.desc2}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default StudiesSlider;
