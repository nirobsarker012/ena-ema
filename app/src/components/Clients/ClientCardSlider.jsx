import React from "react";
import { clientData } from "../../data/indexData";
import Rating from "../Rating/Rating";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientCardSlider = () => {
  return (
    <div className="container-overflow">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {clientData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="bg-card-bg rounded-[12px] p-[24px]">
              <div className="flex items-center mb-6">
                <Rating value={data.rating} />
              </div>
              {/* Desc */}
              <p className="mb-[36px] text-[16px] font-general">{data.desc}</p>
              {/* Client Info */}
              <div className="flex items-center gap-[12px]">
                <img
                  width={36}
                  height={36}
                  src={data.img}
                  alt={data.name}
                  className="rounded-[50%]"
                />
                <div className="flex flex-col gap-y-[2px]">
                  <h4 className="text-[16px] font-general">{data.name}</h4>
                  <span className="text-[12px] font-general text-text-secondary-light">
                    {data.deg}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientCardSlider;
