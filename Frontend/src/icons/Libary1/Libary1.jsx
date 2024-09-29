/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Libary1 = ({ color = "#BCBCBC", className }) => {
  return (
    <svg
      className={`libary-1 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_104_32)">
        <path
          className="path"
          d="M7.34722 2.00317H2.76389C2.58212 1.98584 2.40074 2.03994 2.25816 2.154C2.11558 2.26807 2.02299 2.43315 2 2.61429V20.3365H8.11111V2.61429C8.08812 2.43315 7.99553 2.26807 7.85295 2.154C7.71037 2.03994 7.52899 1.98584 7.34722 2.00317Z"
          fill={color}
        />
        <path
          className="path"
          d="M20.1928 19.1693L15.9517 7.98594C15.9232 7.9109 15.8802 7.8422 15.8252 7.78377C15.7701 7.72535 15.7041 7.67833 15.6309 7.64542C15.5577 7.6125 15.4787 7.59433 15.3985 7.59194C15.3183 7.58955 15.2384 7.60299 15.1633 7.63149L13 8.47483V5.66983C13 5.50775 12.9356 5.35231 12.821 5.23771C12.7064 5.1231 12.551 5.05872 12.3889 5.05872H9.33333V20.3365H13V9.14705L17.235 20.3365L20.1928 19.1693Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_104_32">
          <rect className="rect" fill="white" height="22" width="22" />
        </clipPath>
      </defs>
    </svg>
  );
};

Libary1.propTypes = {
  color: PropTypes.string,
};
