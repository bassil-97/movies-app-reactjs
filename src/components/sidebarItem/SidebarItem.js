import React from "react";
import "./SidebarItem.css";

import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function SidebarItem({ path, icon, title }) {
  return (
    <Link to={path} className="sidebar-item">
      <Tooltip title={title}>{icon}</Tooltip>
    </Link>
  );
}
