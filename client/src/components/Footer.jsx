import React from "react";

const Footer = () => {
  return (
    <footer class="bg-neutral-900 px-[8%] text-center text-white">
      <div class="container text-center pt-6">
        <div class="mb-6">
          <p>
            An EFIR system built on blockchain enables secure, decentralized
            recording and tracking of energy generation, distribution, and
            consumption, promoting transparency and efficient management of
            energy resources.
          </p>
        </div>
        <div class="">
          <h5 class="mb-2.5 font-bold uppercase">Links</h5>
          <ul class="mb-0 list-none">
            <li>
              <a href="#!" class="text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#!" class="text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#!" class="text-white">
                Link 3
              </a>
            </li>
            <li>
              <a href="#!" class="text-white">
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
