"use client";

import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";
import Bid from "./components/bid/bid";
import Collection from "./components/collection/collection";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";
import catBestet from "/public/cat-bastet.jpeg";
import catChinese from "/public/cat-chinese.jpeg";
import catEgyptian from "/public/cat-egyptian.jpeg";
import catEgyptianGoddess from "/public/cat-egyptian-goddes.jpeg";
import catEgyptianNight from "/public/cat-egyptian-night.jpeg";
import catSaudi from "/public/cat-saudi.jpeg";
import catSekhmet from "/public/cat-sekhmet.jpeg";
import catPakhet from "/public/cat-pakhet.jpeg";
import catGoddess from "/public/cat-god.jpeg";
import { useState, useEffect } from "react";
import { NextPage } from "next";

type nftData = any[] | null;

const newNftData = [
  {
    name: "Cat Goddess",
    image: catGoddess,
    floor_price: "",
  },
  {
    name: "Cat Bastet",
    image: catBestet,
    floor_price: "",
  },
  {
    name: "Chinese Cat",
    image: catChinese,
    floor_price: "",
  },
  {
    name: "Egyptian Goddess",
    image: catEgyptian,
    floor_price: "",
  },
  {
    name: "Egyptian Cat in Night",
    image: catEgyptianNight,
    floor_price: "",
  },
  {
    name: "Egyptian Goddess",
    image: catEgyptianGoddess,
    floor_price: "",
  },
  {
    name: "Saudi Cat",
    image: catSaudi,
    floor_price: "",
  },
  {
    name: "Pakhet Cat",
    image: catPakhet,
    floor_price: "",
  },
  {
    name: "Sekhmet",
    image: catSekhmet,
    floor_price: "",
  },
];

const Marketplace: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [displayMode, setDisplayMode] = useState("dark");
  const [data, setData] = useState<nftData>(null);

  useEffect(() => {
    setData(newNftData);
    //fetch nft data from API route
    // const fetchNfts = async () => {
    //   const res = await fetch("/api/nftData");
    //   const data = await res.json();
    //   setData(data.data);
    // };

    // fetchNfts().catch(console.error);
  }, []);

  return (
    <div className={displayMode === "dark" ? "App lg:flex" : "App-lm lg:flex"}>
      <div className="w-full">
        <Sidebar
          selectedComponent={selectedComponent}
          changeComponent={setSelectedComponent}
          displayMode={displayMode}
        />
      </div>
      <div className="px-2">
        <Header displayMode={displayMode} setDisplayMode={setDisplayMode} />
        {selectedComponent === "Dashboard" && (
          <Collection displayMode={displayMode} />
        )}
        {selectedComponent === "Bid" && <Bid displayMode={displayMode} />}
        {selectedComponent === "Collection" && (
          <Dashboard displayMode={displayMode} data={data} />
        )}
        {selectedComponent === "Profile" && (
          <Profile displayMode={displayMode} />
        )}
        {selectedComponent === "Settings" && (
          <Settings displayMode={displayMode} />
        )}
      </div>
    </div>
  );
};

export default Marketplace;
