import React from "react";
import './recentworks/Style.css'
export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-next-arrow`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <svg
      className="w-12 h-12 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  </div>
);

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-prev-arrow`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <svg
      className="w-12 h-12 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      ></path>
    </svg>
  </div>
);
