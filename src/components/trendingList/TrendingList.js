import React from "react";
import "./TrendingList.css";

import TrendingItem from "./trendingItem/TrendingItem";

export default function TrendingList({ data }) {
  return (
    <div className="trending-list">
      {data
        ?.filter((item) => item.isTrending === true)
        .map((el) => (
          <TrendingItem
            key={el.title}
            title={el.title}
            thumbnail={el.thumbnail.trending.small}
            year={el.year}
            category={el.category}
            rating={el.rating}
            isBookmarked={el.isBookmarked}
          />
        ))}
    </div>
  );
}
