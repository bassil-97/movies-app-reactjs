import React from "react";
import "./TvItem.css";

import IconButton from "@mui/material/IconButton";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";

export default function TvItem({ item }) {
  return (
    <div className="tv-item">
      <div
        className="tv-item-image"
        style={{
          background: `url(${item?.thumbnail?.regular?.small}) center`,
        }}
      >
        <div className="tv-item-header">
          <IconButton aria-label="bookmark">
            <BookmarkAddOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="tv-item-content">
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
