import "./header.css";

import Display from "./images/darkDisplay.svg";
import lmDisplay from "./images/lightDisplay.svg";
import Notifications from "./images/Notifications.svg";
import Avatar from "../../../../public/icon.png";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import Image from "next/image";

const Header = ({
  displayMode,
  setDisplayMode,
}: {
  displayMode: string;
  setDisplayMode: Function;
}) => {
  let displayIcon;
  let searchId;

  const handleClick = () => {
    if (displayMode === "dark") {
      displayIcon = lmDisplay;
      setDisplayMode("light");
    } else {
      displayIcon = Display;
      setDisplayMode("dark");
    }
  };

  if (displayMode === "dark") {
    searchId = "search";
    displayIcon = Display;
  } else {
    searchId = "search-lm";
    displayIcon = lmDisplay;
  }

  return (
    <header className="mb-4 flex flex-wrap lg:items-center lg:justify-end lg:w-full lg:my-[2rem]">
      {/* <input id={searchId} type="search" placeholder="Search..." /> */}
      <div className="img--container mt-4 lg:mt-0">
        <Image onClick={handleClick} src={displayIcon} alt="display" />
        <Image src={Notifications} alt="notifs" />
        <Image width={60} height={40} src={Avatar} alt="user" />
        <div className="flex flex-wrap gap-2">
          <WalletMultiButton />
          <WalletDisconnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
