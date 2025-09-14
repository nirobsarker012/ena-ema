import React from "react";
import { autoPlayImg } from "../../../../public/assets/assets";
import Image from "next/image";

const AutoScroll = () => {
  return (
    <section className="my-[100px] overflow-x-auto">
      {/* Auto scroll Section */}
      <div className="flex items-center gap-x-3.5">
        {autoPlayImg.map((img) => (
          <div key={img.id} className="flex-shrink-0">
            <Image
              height={470}
              width={700}
              src={img.icon}
              alt=""
              className="rounded-xl object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoScroll;
