import React from "react";
import Image from "next/image";

const Rating = ({ value }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: value }, (_, index) => (
        <Image
          key={index}
          src={"/assets/icons/bold-star.svg"}
          alt="star"
          width={16}
          height={12}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export default Rating;
