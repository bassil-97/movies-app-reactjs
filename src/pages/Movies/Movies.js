import React from "react";
import "./Movies.css";

import data from "../../assets/data.json";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function Movies() {
  return (
    <div className="movies-list">
      <h2 className="movies-list-header">Movies</h2>
      <MoviesList data={data} />
    </div>
  );
}
