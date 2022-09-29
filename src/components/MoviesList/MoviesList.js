import React from "react";
import "./MoviesList.css";

import MoviesItem from "./MoviesItem/MoviesItem";

export default function MoviesList({ data }) {
  return (
    <div className="movies">
      {data
        ?.filter((item) => item.category === "Movie")
        .map((el) => (
          <MoviesItem item={el} />
        ))}
    </div>
  );
}
