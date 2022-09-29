import React from "react";
import "./Recommended.css";

import data from "../../assets/data.json";
import RecommendedList from "../../components/Recommended/RecommendedList";

export default function Recommended() {
  return (
    <div className="recommended">
      <h2 className="recommended-section-title">Recommended for you</h2>
      <RecommendedList data={data} />
    </div>
  );
}
