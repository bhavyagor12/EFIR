import React from "react";

const Sidebar = () => {
  return (
    <div className="drawer-side ">
      <ul className="menu p-4 w-72  text-white bg-primary  h-[100vh]">
        <h1 className="text-center mb-4">LOGO</h1>
        <li>
          <a>File a FIR</a>
        </li>
        <li>
          <a>Transfer FIR</a>
        </li>
        <li>
          <a>Print FIR</a>
        </li>
        <li>
          <a>Statistics</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
