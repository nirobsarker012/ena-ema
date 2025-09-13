import React from "react";
import Marquee from "react-fast-marquee";
import AutoScroll from "./AutoScroll";

const AutoScrollMarquee = () => {
  return (
    <Marquee speed={70} gradientColor={[255, 255, 255, 1]}>
      <AutoScroll />
    </Marquee>
  );
};

export default AutoScrollMarquee;
