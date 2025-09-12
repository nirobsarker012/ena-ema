import React from "react";
import Image from "next/image";
import logo from "../../assets/Logo/Logo.svg";

const Navbar = () => {
  return (
    <header className="container">
      <nav className="flex items-center justify-center pt-[30px] pb-[80px]">
        <Image src={logo} alt="ena-ema" className="w-[120px]" />
      </nav>
    </header>
  );
};

export default Navbar;
