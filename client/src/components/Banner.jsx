import React from "react";
import hero from "../images/policeOffice.png";
const Banner = () => {
  return (
    <div class="p-16 md:pt-0 md:p-0 bg-[#00040f] w-full">
      <div class="flex flex-wrap flex-col md:flex-row items-center justify-around  md:p-0 ">
        <div class="flex flex-col px-24 w-full md:w-3/5 justify-center items-center md:items-start text-center md:text-left text-white">
          <h1 class="my-4 text-6xl md:text-8xl font-bold leading-tight">
            EFIR System
          </h1>
          <p class="leading-normal text-xl mb-8">
            Secure, Transparent, Tamper-proof record-keeping and Authentication.
          </p>
        </div>
        <div class="hidden md:flex items-center justify-end w-full md:w-2/5 p-8">
          <img src={hero} alt="server" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
