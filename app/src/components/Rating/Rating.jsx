import React from "react";
import Image from "next/image";
import Star from "../../assets/icons/bold-star.svg";

const Rating = ({ value }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: value }, (_, index) => (
        <Image
          key={index}
          src={Star}
          alt="star"
          width={12}
          height={12}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export default Rating;
