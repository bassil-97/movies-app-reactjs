import React from "react";
import "./TrendingItem.css";

import IconButton from "@mui/material/IconButton";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";

export default function TrendingItem({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}) {
  return (
    <div
      className="trending-item"
      style={{
        background: `url(${thumbnail}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="trending-item-header">
        <IconButton aria-label="bookmark">
          <BookmarkAddOutlinedIcon />
        </IconButton>
      </div>
      <div className="trending-item-content">
        <div className="item-info">
          <span>{year} . </span>
          <span>
            {category === "Movie" ? (
              <MovieCreationIcon fontSize="small" />
            ) : (
              <TvIcon fontSize="small" />
            )}
          </span>
          <span> . {category}</span>
        </div>
        <h3 className="item-title">{title}</h3>
      </div>
    </div>
  );
}
