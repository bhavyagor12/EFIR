import React from "react";
import Fir from "../images/FIleFIr.png";
const ActionCards = ({ title, img, desc }) => {
  return (
    <div>
      <div class="container mx-4 my-4">
        <div class="w-64 border">
          <img src={img} class="w-full" alt="..." />
          <div class="p-4">
            <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
              {title}
            </h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
