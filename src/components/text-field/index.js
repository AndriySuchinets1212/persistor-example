import React from "react";

import "./styles.css";

export const TextField = ({label, value, setValue}) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <input 
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}