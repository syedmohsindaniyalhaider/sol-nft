import "./dashboard.css";
import Trending from "../trending/trending";
import Featured from "../../../../public/bannerImage.jpeg";
import Avatar from "../../../../public/icon.png";

import Image from "next/image";

type nftData = any[] | null;

const Dashboard = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data: nftData;
}) => {
  let featuredClass;
  let contContainerClass;
  let discTitleClass;

  if (displayMode === "dark") {
    featuredClass = "featured";
    contContainerClass = "cont--container";
    discTitleClass = "disc--title";
  } else {
    featuredClass = "featured-lm";
    contContainerClass = "cont--container-lm";
    discTitleClass = "disc--title-lm";
  }

  return (
    <main className={displayMode === "dark" ? "text-white" : ""}>
      <div className="flex flex-wrap gap-8 mb-6">
        <div id="explore" className="discover">
          <div className={discTitleClass}>
            Discover, Collect, Sell, and Create your NFT
          </div>
          <div id="desc">
            Digital marketplace for crypto collectibles and non-fungible tokens
          </div>
          <div className="button--container">
            <button id="discover">Explore</button>
            <button id="create">Create</button>
          </div>
        </div>
        <div id="explore" className={featuredClass}>
          <Image
            id="featured"
            className="w-full rounded-lg"
            src={Featured}
            alt="featured"
          />
          <div className="w-full ft--container">
            <div className="ft--user-container">
              <Image src={Avatar} width={70} alt="avatar" />
              <div>$BOPUS</div>
              <div id="status"></div>
            </div>
            <div className="ft--title">Book of Pussy Portal</div>
            <div className="ft--auction">
              <div>Auction time</div>
              <div id="current-bid">
                <div>Current Bid</div>
                <div>:</div>
                <div id="bid">1.50 SOL</div>
              </div>
            </div>
            <div className="vals">
              <div>3h 1m 50s</div>
              <div>20 SOL</div>
            </div>
            {/* <div className="button--container">
              <button id="place-bid">Place a Bid</button>
              <button id="details">Details</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="label">
        <div>Trending Bids</div>
        {/* <div id="selector">
          <div id="selected" className="selector--item">
            All
          </div>
          <div className="selector--item">Artwork</div>
          <div className="selector--item">Music</div>
        </div> */}
      </div>
      <Trending displayMode={displayMode} data={data} />
    </main>
  );
};

export default Dashboard;
