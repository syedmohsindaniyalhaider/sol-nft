import Card from "../card/card";
import React, { ReactElement } from "react";
import "./trending.css";

type nftData = any[] | null;

const Trending = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data?: nftData;
}) => {
  let trendingCards: ReactElement | any[] = (
    <>
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
    </>
  );

  if (data) {
    trendingCards = data.map((obj) => {
      return (
        <Card
          displayMode={displayMode}
          key={obj.id}
          title={obj.name}
          image={obj.image}
          floor_price={obj.floorPrice}
        />
      );
    });
  }

  return (
    <div className="mt-4 pb-4 flex flex-wrap justify-between gap-4">
      {trendingCards}
    </div>
  );
};

export default Trending;
