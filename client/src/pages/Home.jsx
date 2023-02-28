import React from "react";
import ActionCards from "../components/ActionCards";
import Banner from "../components/Banner";
import Business from "../components/Business";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Fir from "../images/FIleFIr.png";
import hero from "../images/policeOffice.png";
const Landing = () => {
  return (
    <div className="bg-[#00040f]">
      {/* <Nav /> */}
      <Banner />
      <Business />

      <section class="pt-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white mb-16">
          Services for the Police
        </h2>
        <div class="mx-auto flex flex-wrap items-center justify-around  gap-2  pt-4 pb-12">
          <ActionCards
            title="File a Fir"
            img={Fir}
            desc="Completely paperless system that solves a bunch of issues"
          />
          <ActionCards
            title="Transfer Fir files"
            img={Fir}
            desc="No need to worry about tranferring a case file anymore"
          />
          <ActionCards
            title="Find a Case"
            img={Fir}
            desc="Finding information about any case at any point of time"
          />
          <ActionCards
            title="Chat with other officers"
            img={Fir}
            desc="On going case investigation(coming soon)"
          />
        </div>
      </section>
      <section class="pt-4">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white mb-16">
          Services for the Citizens
        </h2>
        <div class="mx-auto flex flex-wrap items-center justify-around  gap-2   pt-4 pb-12">
          <ActionCards
            title="Track a Fir"
            img={Fir}
            desc="Find information about progress on your FIR"
          />
          <ActionCards
            title="Rules and Regulations"
            img={Fir}
            desc="Be updated with the current rules and regulations"
          />
          <ActionCards
            title="Print a FIR"
            img={Fir}
            desc="Get access of any FIR filed by you"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
