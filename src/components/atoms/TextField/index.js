import React from "react";
import "./style.css";
export default function TextField({ value, onChange, onClick }) {
  return (
    <div className="searchField">
      <input
        type="text"
        className="searchInputStyle"
        value={value}
        onChange={onChange}
        onSubmit={onClick}
        placeholder="Type your search term here..."
      />
      <button className="confirmButtonStyle" onClick={onClick}>
        OK
      </button>
    </div>
  );
}
