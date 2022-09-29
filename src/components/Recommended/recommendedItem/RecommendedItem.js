import React from "react";
import "./RecommendedItem.css";

import IconButton from "@mui/material/IconButton";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";

export default function RecommendedItem({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}) {
  return (
    <div className="recommended-item">
      <div
        className="recommended-item-image"
        style={{ background: `url(${thumbnail}) center` }}
      >
        <div className="recommended-item-header">
          <IconButton aria-label="bookmark">
            <BookmarkAddOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="recommended-item-content">
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
