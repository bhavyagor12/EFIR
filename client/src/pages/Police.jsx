import React from "react";
import Sidebar from "../components/Sidebar";
import hero from "../images/policeSquad.png";
const Police = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100vw]">
        {/* Banner */}
        <section className="banner">
          {" "}
          <div class="p-16 md:pt-0 md:p-0 bg-black w-full">
            <div class="flex flex-wrap flex-col md:flex-row items-center justify-between md:p-0 ">
              <div class="flex flex-col  w-full md:w-3/5 justify-center items-center md:items-start text-center md:text-left text-white">
                <h1 class="my-4 px-24 text-2xl md:text-6xl font-bold leading-tight">
                  Welcome <span className="text-primary">Name_of_police</span>
                </h1>
                <p class=" px-24 leading-normal text-xl mb-8">
                  Secure, Transparent, Tamper-proof record-keeping and
                  Authentication.
                </p>
              </div>
              <div class="hidden md:block items-end justify-end w-full md:w-1/6 ">
                <img src={hero} alt="server" />
              </div>
            </div>
          </div>
        </section>
        {/* Table */}
        {/* Button to go to filling of FIR Page  */}
        {/* Statistics  */}
      </div>
    </div>
  );
};

export default Police;
