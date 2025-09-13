import React from "react";
import { autoPlayImg } from "../../assets/assets";
import Image from "next/image";

const AutoScroll = () => {
  return (
    <section className="my-[100px] overflow-x-auto">
      {/* Auto scroll Section */}
      <div className="flex items-center gap-x-3.5">
        {autoPlayImg.map((img) => (
          <div key={img.id} className="flex-shrink-0">
            <Image
              src={img.icon}
              alt=""
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] rounded-xl object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoScroll;
