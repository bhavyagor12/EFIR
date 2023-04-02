import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

import EFIRFilling from "./views/admin/efir-fill";
import EFIRRetrieval from "./views/admin/efir-retrieve";
import EFIRTransfer from './views/admin/efir-transfer';
// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdUploadFile,
  MdDownload
} from "react-icons/md";
import {RiFileTransferLine} from 'react-icons/ri'
const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name:"EFIR Filling",
    layout:"/admin",
    path:"fill-efir",
    icon:<MdUploadFile className="h-6 w-6" />,
    component: <EFIRFilling />,
  },
  {
    name:"EFIR Retrieval",
    layout:"/admin",
    path:"efir-retrieval",
    icon:<MdDownload className="h-6 w-6" />,
    component: <EFIRRetrieval />,
  },
  {
    name:"EFIR Transfer",
    layout:"/admin",
    path:"efir-transfer",
    icon:<RiFileTransferLine className="h-6 w-6" />,
    component: <EFIRTransfer />,
  }
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
