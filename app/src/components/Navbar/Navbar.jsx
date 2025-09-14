import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <header className="container">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center justify-center pt-[30px] pb-[80px]"
      >
        <Image
          width={120}
          height={27}
          src={"/assets/Logo/Logo.svg"}
          alt="ena-ema"
          className="w-[120px]"
        />
      </motion.nav>
    </header>
  );
};

export default Navbar;
