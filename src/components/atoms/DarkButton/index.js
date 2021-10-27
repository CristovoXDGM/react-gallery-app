import React from "react";
import "./style.css";

export default function DarkButton({ label, onClick }) {
  return (
    <button className="darkButtonStyle" onClick={onClick}>
      {label}
    </button>
  );
}
