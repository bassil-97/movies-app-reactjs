import React from "react";
import "./TvList.css";

import TvItem from "./TvItem/TvItem";

export default function TvList({ data }) {
  return (
    <div className="Tv">
      {data
        ?.filter((item) => item.category === "TV Series")
        .map((el) => (
          <TvItem item={el} />
        ))}
    </div>
  );
}
