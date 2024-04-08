import "./collection.css";
import Trending from "../trending/trending";

const Collection = ({ displayMode }: { displayMode: string }) => {
  // let collectionContainerClass;

  // if (displayMode === "dark") {
  //   collectionContainerClass = "collection--container";
  // } else {
  //   collectionContainerClass = "collection--container-lm";
  // }

  return (
    <main
      className={
        displayMode === "dark"
          ? "lg:flex lg:flex-col lg:h-[59.125rem] lg:w-[76.25rem]"
          : "lg:flex lg:flex-col lg:h-[59.125rem] lg:w-[76.25rem]"
      }
    >
      <div>
        <h1 className={displayMode === "dark" ? "text-white" : ""}>
          Dashboard
        </h1>
        <div className="label--container">
          <div className={displayMode === "dark" ? "text-white" : ""}>
            Welcome to your Dashboard
          </div>
          <div id="label">
            <div id="home">Home</div>
            <div>{`>`}</div>
            <div>Dashboard</div>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap lg:flex-nowrap gap-8">
          <div
            className={
              displayMode === "dark"
                ? "bg-[#6F4EF2] w-full rounded-lg p-4"
                : "bg-white w-full rounded-lg p-4"
            }
          >
            <p className="uppercase font-bold text-[32px] mb-4">Staking</p>
            <div className="flex flex-wrap lg:flex-nowrap gap-6 text-black">
              <div
                className={
                  displayMode === "dark"
                    ? "p-4 bg-white w-full rounded-lg"
                    : "p-4 text-white bg-[#6F4EF2] w-full rounded-lg"
                }
              >
                <p className="text-[24px] font-bold mb-2">16107</p>
                <div className="flex justify-between">
                  <p className="font-bold text-[14px]">TOTAL NFTS</p>
                  <span className="text-[14px]">All</span>
                </div>
              </div>
              <div
                className={
                  displayMode === "dark"
                    ? "p-4 bg-white w-full rounded-lg"
                    : "p-4 text-white bg-[#6F4EF2] w-full rounded-lg"
                }
              >
                <p className="text-[24px] font-bold mb-2">0</p>
                <p className="font-bold text-[14px]">Total Tasks</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap  w-full gap-4 text-black">
            <div className="bg-white w-full rounded-lg text-center pt-12">
              <p className="text-[32px] font-bold">$0</p>
              <p className="text-[24px]">Revenue (USDT)</p>
              <p className="text-[14px] mt-2">To Phantom</p>
            </div>
            <div className="bg-white w-full rounded-lg text-center pt-12">
              <p className="text-[32px] font-bold">$0</p>
              <p className="text-[24px]">Revenue (USDT)</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Nonce
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Source Tx Hash
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Destination Tx Hash
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody
              className={
                displayMode === "dark"
                  ? "divide-y divide-gray-200 text-white"
                  : "divide-y divide-gray-200"
              }
            >
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">John Doe</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  john@example.com
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div id="selector">
          <div id="selected" className="selector--item">
            All
          </div>
          <div className="selector--item">Artwork</div>
          <div className="selector--item">Music</div>
        </div> */}
      </div>
      {/* <Trending displayMode={displayMode} /> */}
    </main>
  );
};

export default Collection;
