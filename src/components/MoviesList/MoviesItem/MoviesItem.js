import React from "react";
import "./MoviesItem.css";

import IconButton from "@mui/material/IconButton";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";

export default function MoviesItem({ item }) {
  return (
    <div className="movies-item">
      <div
        className="movies-item-image"
        style={{
          background: `url(${item?.thumbnail?.regular?.small}) center`,
        }}
      >
        <div className="movies-item-header">
          <IconButton aria-label="bookmark">
            <BookmarkAddOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="movies-item-content">
        <div className="item-info">
          <span>{item.year} . </span>
          <span>
            {item.category === "Movie" ? (
              <MovieCreationIcon fontSize="small" />
            ) : (
              <TvIcon fontSize="small" />
            )}
          </span>
          <span> . {item.category}</span>
        </div>
        <h3 className="item-title">{item.title}</h3>
      </div>
    </div>
  );
}
