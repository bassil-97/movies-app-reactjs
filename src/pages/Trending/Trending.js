import React from "react";
import "./Trending.css";

import data from "../../assets/data.json";
import TrendingList from "../../components/trendingList/TrendingList";

export default function Trending() {
  return (
    <div className="trending-slider">
      <h2 className="trending-section-title">trending</h2>
      <TrendingList data={data} />
    </div>
  );
}
