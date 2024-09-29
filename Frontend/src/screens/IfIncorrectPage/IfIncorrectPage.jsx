import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const IfIncorrectPage = () => {
  return (
    <div className="if-incorrect-page">
      <div className="div-2">
        <Link className="logo-2" to="/home-page">
          <img className="image-2" alt="Image" src="/img/image-8.png" />
          <div className="overlap-group-3">
            <div className="text-wrapper-10">Bright Buddy</div>
          </div>
        </Link>
        <img
          className="bunny-image-incorrect"
          alt="Bunny image incorrect"
          src="/img/incorrect-slide-bunny-image.png"
        />
        <div className="overlap-11">
          <img
            className="not-quite-can"
            alt="Not quite can"
            src="/img/not-quite-can-brightbuddy-help-you.png"
          />
          <img
            className="thumbs-down"B
            alt="Thumbs down"
            src="/img/thumbs-down.png"
          />
        </div>
        <img
          className="next-page-incorrect"
          alt="Next page incorrect"
          src="/img/next-page-incorrect.png"
        />
      </div>
    </div>
  );
};

export default IfIncorrectPage;
