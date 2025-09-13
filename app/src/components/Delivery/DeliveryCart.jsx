import React from "react";
import { deliveryData } from "../../data/indexData";
import Image from "next/image";

const DeliveryCart = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {deliveryData.map((data) => (
          <div
            key={data.id}
            className="p-9 bg-[#192420] rounded-lg max-w-[300px] mx-auto relative"
          >
            {/* Days show num */}
            <span className="absolute font-general top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary border border-primary px-2 rounded-full">
              Days {data.dayNum}
            </span>

            <div className="mx-auto mb-9 bg-[#003D25] flex items-center justify-center w-20 aspect-square rounded-full">
              <Image
                src={data.icon}
                alt={data.title}
                className="w-9 inline-block"
              />
            </div>

            {/* desc */}
            <div className="text-center">
              <h3 className="text-lg font-medium font-general text-client-text mb-2">
                {data.title}
              </h3>
              <p className="text-shadow-text-secondary-light font-general text-sm">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryCart;
