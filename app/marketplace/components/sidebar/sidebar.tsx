import "./sidebar.css";
import Logo from "./images/Logo.svg";
import Dashboard from "./images/DashBoard.svg";
import Bid from "./images/Bid.svg";
import Collection from "./images/Collection.svg";
import Profile from "./images/Profile.svg";
import Settings from "./images/Settings.svg";
import Logout from "./images/Logout.svg";
import selectedDashboard from "./images/selectedDashBoard.svg";
import selectedBid from "./images/selectedBid.svg";
import selectedCollection from "./images/selectedCollection.svg";
import selectedProfile from "./images/selectedProfile.svg";

import Image from "next/image";
import { useState } from "react";

const Sidebar = ({
  selectedComponent,
  changeComponent,
  displayMode,
}: {
  selectedComponent: string;
  changeComponent: Function;
  displayMode: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (component: string) => {
    console.log(component);
    changeComponent(component);
  };

  // let containerClass;
  // if () {
  //   containerClass = "sb--container";
  // } else {
  //   containerClass = "sb--container-lm";
  // }

  return (
    <div
      className={
        displayMode === "dark"
          ? "lg:mx-[12px] lg:my-[10px] lg:h-[93vh] py-12 rounded-lg lg:fixed lg:bg-[#1d1932] px-2 text-white"
          : "lg:mx-[12px] lg:my-[10px] lg:h-[93vh] py-12 rounded-lg lg:fixed lg:bg-white px-2"
      }
    >
      <div>
        {/* <div id="logo">
            <Image src={Logo} alt="logo" />
          </div> */}
        <div className="flex flex-row lg:flex-col justify-between gap-[3rem] text-center">
          <div className="hidden lg:block font-bold text-[14px]">Menu</div>
          <div
            className="hover:cursor-pointer hover:text-[#6F4EF2]"
            onClick={() => handleClick("Dashboard")}
          >
            Dashboard
          </div>
          <div
            className="hover:cursor-pointer hover:text-[#6F4EF2]"
            onClick={() => handleClick("Bid")}
          >
            Staking
          </div>
          <div
            className="hover:cursor-pointer hover:text-[#6F4EF2]"
            onClick={() => handleClick("Collection")}
          >
            NFTs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
