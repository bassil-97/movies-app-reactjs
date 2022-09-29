import React from "react";
import "./Sidebar.css";

import SidebarItem from "../sidebarItem/SidebarItem";
import Avatar from "../avatar/Avatar";
import Logo from "../logo/Logo";

import WindowIcon from "@mui/icons-material/Window";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export default function Sidebar() {
  const sidebarItems = [
    {
      key: "home",
      title: "home",
      path: "/",
      icon: <WindowIcon />,
    },
    {
      key: "movies",
      title: "movies",
      path: "/movies",
      icon: <MovieCreationIcon />,
    },
    {
      key: "tv",
      title: "tv",
      path: "/tv",
      icon: <TvIcon />,
    },
    {
      key: "bookmarks",
      title: "bookmarks",
      path: "/bookmarks",
      icon: <BookmarksIcon />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Logo icon={<WindowIcon style={{ color: "#ff4446" }} />} />
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.key}
              path={item.path}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <Avatar />
    </div>
  );
}
