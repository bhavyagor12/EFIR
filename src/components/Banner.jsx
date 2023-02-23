import React from "react";
import hero from "../images/policeWorking.png";
const Banner = () => {
  return (
    <div class="pt-20 md:pt-4 bg-[#698269]">
      <div class="container  flex flex-wrap flex-col md:flex-row items-center p-4 md:p-0">
        <div class="hidden md:flex w-full md:w-2/5">
          <img src={hero} alt="server" className="pt-[7%]" />
        </div>
        <div class="flex flex-col pl-2 w-full md:w-3/5 justify-center items-center md:items-start text-center md:text-left text-[#F1DBBF]">
          <h1 class="my-4 text-3xl md:text-6xl font-bold leading-tight">
            EFIR System
          </h1>
          <p class="leading-normal text-xl mb-8">
            Secure, Transparent, Tamper-proof record-keeping and Authentication.
          </p>
          <button className="bg-[#AA5656] text-[#F1DBBF] font-[Poppins] py-2 px-6 rounded  hover:bg-[#F1DBBF] hover:text-[#AA5656] duration-500">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
