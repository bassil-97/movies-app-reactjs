import React from "react";
import "./logo.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to={"/"} className="logo">
      <img src={logo} alt="logo" />
    </Link>
  );
}
