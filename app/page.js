"use client";
import Ability from "./src/components/Abilty/Ability";
import AutoScroll from "./src/components/AutoScroll/AutoScroll";
import AutoScrollMarquee from "./src/components/AutoScroll/AutoScrollMarquee";
import BusinessTrust from "./src/components/Business/BusinessTrust";
import Delivery from "./src/components/Delivery/Delivery";
import Faq from "./src/components/FAQ/Faq";
import Hero from "./src/components/Hero/Hero";
import Navbar from "./src/components/Navbar/Navbar";
import Price from "./src/components/Price/Price";
import Studies from "./src/components/Studies/Studies";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Blur background behind navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary/10 rounded-full w-[816px] h-[252px] blur-3xl -mt-[100px] z-0" />

        {/* Navbar on top */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Hero section below */}
        {/* Hero content on top */}
        <div className="relative z-10">
          <Hero />
        </div>

        {/* Auto Scroll Section */}
        <AutoScrollMarquee />
        {/* Business Trust */}
        <BusinessTrust />
        <div className="bg-[#0A0F0D] py-[120px]">
          {/* Study */}
          <Studies />
          {/* Price Section */}
          <Price />
          {/* Abilty Section */}
          <Ability />
        </div>
        {/* Delivery Section */}
        <Delivery />
        {/* Faq Section */}
        <Faq />
      </div>
    </>
  );
}
