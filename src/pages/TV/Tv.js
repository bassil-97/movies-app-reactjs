import React from "react";
import "./Tv.css";

import data from "../../assets/data.json";
import TvList from "../../components/TvList/TvList";

export default function Tv() {
  return (
    <div className="tv-list">
      <h2 className="tv-list-header">TV Series</h2>
      <TvList data={data} />
    </div>
  );
}
