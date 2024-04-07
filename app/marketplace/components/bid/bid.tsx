import "./bid.css";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";

import Image from "next/image";

const Bid = ({ displayMode }: { displayMode: string }) => {
  const Panel = () => {
    return (
      <div className={panelClass}>
        <input type="checkbox" />
        <div className="nft--container">
          <Image id="nft" src={NFT} alt="nft" />
          <div className="nft--details">
            <div id="name">Cute Cube Cool</div>
            <div>John Abraham</div>
          </div>
        </div>
        <div>20.50 SOL</div>
        <div>20.50 SOL</div>
        <div className="offer-container">
          <Image src={Avatar} alt="user" />
          <div>20.50 SOL</div>
        </div>
        <div>2 Hours 1 Min 30s</div>
        <div id="X">X</div>
      </div>
    );
  };

  let bidClass;
  let panelClass: string;

  if (displayMode === "dark") {
    bidClass = "bids--container";
    panelClass = "activity--panel";
  } else {
    bidClass = "bids--container-lm";
    panelClass = "activity--panel-lm";
  }

  return (
    <main className={bidClass}>
      <div>
        <h1>Staking</h1>
        <div className="label--container">
          <div>Welcome to Staking</div>
          <div id="label">
            <div id="home">Home</div>
            <div>{`>`}</div>
            <div id="bids">Staking</div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <div className="activity--container-label">
        <h1>Active Bids</h1>
        <button>Place a Bid</button>
      </div> */}
      <div className="bg-[#1D1932] rounded-lg px-[20px] py-[20px]">
        <div className="flex justify-between mb-8 gap-4">
          <div className="text-center w-full bg-[#6F4EF2] p-10 rounded-lg">
            <p>32,900,335.35 BOMEOW</p>
            <p>TOKEN BOMEOW STAKED</p>
          </div>
          <div className="text-center text-[#6F4EF2] bg-white w-full p-10 rounded-lg">
            <p>32,900,335.35 BOMEOW</p>
            <p>TOKEN VALUE LOCKED</p>
          </div>
          <div className="text-center bg-[#6F4EF2] w-full p-10 rounded-lg">
            <p>0 BOMEOW / $0</p>
            <p>YOUR STAKE</p>
          </div>
          <div className="text-center text-[#6F4EF2] bg-white w-full p-10 rounded-lg">
            <p>0 BOMEOW / $0</p>
            <p>YOUR TOTAL REWARD</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="uppercase px-4 py-2">Active Pools</p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Pool
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    SOL REWARDS
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    APR
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    LOCK TERM
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    UNSTAKING FEE
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    CAPACITY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    john@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4">
          <p className="uppercase px-4 py-2">NFT Pools</p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Pool
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    SOL REWARDS
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    APR
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    LOCK TERM
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    UNSTAKING FEE
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    CAPACITY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    john@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="uppercase px-4 py-2">Closed Pools</p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Pool
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    SOL REWARDS
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    APR
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    LOCK TERM
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    UNSTAKING FEE
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    CAPACITY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    john@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                  <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="activity--container">
                <div className="activity--label">
                    <input type="checkbox"/>
                    <div>Item List</div>
                    <div>Open Price</div>
                    <div>Your Offer</div>
                    <div>Recent Offer</div>
                    <div>Time Left</div>
                    <div id="X">Action</div>
                </div>
                <div className="activity--div"></div>
                <div className="panel--container">
                    <Panel />
                    <Panel />
                    <Panel />
                    <Panel />
                    <Panel />
                    <Panel />
                    <Panel />
                    <Panel />
                </div>
            </div> */}
    </main>
  );
};

export default Bid;
