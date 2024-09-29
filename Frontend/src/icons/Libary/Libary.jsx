/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Libary = ({ color = "#BCBCBC", className }) => {
  return (
    <svg
      className={`libary ${className}`}
      fill="none"
      height="38"
      viewBox="0 0 43 38"
      width="43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_742_312)">
        <path
          className="path"
          d="M14.2446 3.45228H5.35857C5.00616 3.42241 4.65451 3.51564 4.37808 3.71222C4.10165 3.9088 3.92214 4.19329 3.87756 4.50547V35.048H15.7256V4.50547C15.6811 4.19329 15.5015 3.9088 15.2251 3.71222C14.9487 3.51564 14.597 3.42241 14.2446 3.45228Z"
          fill={color}
        />
        <path
          className="path"
          d="M39.1492 33.0364L30.9267 13.763C30.8715 13.6337 30.7881 13.5153 30.6814 13.4146C30.5747 13.3139 30.4468 13.2329 30.3048 13.1762C30.1629 13.1194 30.0098 13.0881 29.8542 13.084C29.6987 13.0799 29.5438 13.1031 29.3983 13.1522L25.2041 14.6056V9.77142C25.2041 9.4921 25.0792 9.22422 24.857 9.0267C24.6348 8.82919 24.3335 8.71823 24.0193 8.71823H18.0952V35.048H25.2041V15.7641L33.4148 35.048L39.1492 33.0364Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_742_312">
          <rect className="rect" fill="white" height="37.9149" width="42.6531" />
        </clipPath>
      </defs>
    </svg>
  );
};

Libary.propTypes = {
  color: PropTypes.string,
};
