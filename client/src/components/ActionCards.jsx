import React from "react";
import Fir from "../images/FIleFIr.png";

const ActionCards = ({ title, img, desc }) => {
  return (
    <div>
      <div class="mt-2 w-full max-w-xs md:max-w-md bg-gray-800 border border-gray-100 rounded-lg shadow  ">
        <a href="#">
          <img class="p-8 rounded-t-lg" src={Fir} alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <h5 class="text-m md:text-xl text-center font-semibold tracking-tight text-white">
            FIR FIR
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
