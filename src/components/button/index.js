import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export const Button = ({onClick}) => {
  return (
    <div className="button-wrapper">
      <Link to="/home" className="link" onClick={onClick}>
        <p className="button-text">Login</p>
      </Link>
    </div>
  )
}