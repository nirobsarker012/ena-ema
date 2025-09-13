import React from "react";
import ClientCardSlider from "./ClientCardSlider";

const Clients = () => {
  return (
    <section>
      <div className="container mt-[60px]">
        <h1 className="font-manrope font-medium text-[48px] text-shadow-client-text">
          What Our Clients Are Saying{" "}
          <span className="text-primary">About Us</span>
        </h1>
        <p className="mt-2 mb-[48px] text-shadow-client-text text-[16px]">
          Real feedback from real businesses who've seen real results.
        </p>
        {/*  Client Slieder section */}
      </div>
      <ClientCardSlider />
    </section>
  );
};

export default Clients;
