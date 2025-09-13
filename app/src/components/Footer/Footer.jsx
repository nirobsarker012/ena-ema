import Image from "next/image";
import React from "react";
import FooterLogo from "../../assets/Logo/footerLogo.svg";
import { footerIcon } from "../../data/indexData";

const Footer = () => {
  return (
    <footer className="bg-primary py-[64px]">
      <div className="flex justify-between items-center container">
        <Image src={FooterLogo} alt="ena-ema" />
        {/* Small device */}
        <div className="flex flex-col lg:flex-row max-w-[190px] gap-y-2 lg:hidden items-center justify-between">
          <span className="text-text-light text-[12px]">
            &copy; All rights reserved to Ena Ema Technologies
          </span>
          <div className="flex items-center gap-x-4">
            {footerIcon.map((item, i) => (
              <Image key={i} src={item.icon} alt="" className="w-[22px]" />
            ))}
          </div>
        </div>
        {/* large device */}

        <span className="text-text-light text-[12px] hidden lg:block">
          &copy; All rights reserved to Ena Ema Technologies
        </span>
        <div className="lg:flex items-center gap-x-4 hidden">
          {footerIcon.map((item, i) => (
            <Image
              key={i}
              src={item.icon}
              alt=""
              className="w-[22px] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
