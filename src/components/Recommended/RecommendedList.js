import React from "react";
import "./RecommendedList.css";

import RecommendedItem from "./recommendedItem/RecommendedItem";

export default function RecommendedList({ data }) {
  return (
    <div className="recommended-list">
      {data
        ?.filter((item) => item.isTrending !== true)
        .map((el) => (
          <RecommendedItem
            key={el.title}
            title={el.title}
            thumbnail={el.thumbnail.regular.small}
            year={el.year}
            category={el.category}
            rating={el.rating}
            isBookmarked={el.isBookmarked}
          />
        ))}
    </div>
  );
}
