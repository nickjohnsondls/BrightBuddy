import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const IfCorrectPage = () => {
  return (
    <div className="if-correct-page">
      <div className="div-2">
        <Link className="logo-2" to="/">
          <img className="image-2" alt="Image" src="/img/image-8.png" />
          <div className="overlap-group-3">
            <div className="text-wrapper-10">Bright Buddy</div>
          </div>
        </Link>
        <img className="bunny-image-correct" alt="Bunny image correct" src="/img/incorrect-slide-bunny-image.png" />
        <div className="overlap-11">
          <img
            className="excellent-work-they"
            alt="Excellent work they"
            src="/img/excellent-work-they-used-a-bucket-to-build-their-sandcastle.png"
          />
          <img className="thumbs-up" alt="Thumbs up" src="/img/thumbs-up.png" />
        </div>
        <img className="next-page-correct" alt="Next page correct" src="/img/next-page-incorrect.png" />
      </div>
    </div>
  );
};

export default IfCorrectPage;
