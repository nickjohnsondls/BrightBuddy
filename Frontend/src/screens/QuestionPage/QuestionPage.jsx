import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const QuestionPage = () => {
  return (
    <div className="question-page">
      <div className="container">
        <div className="frame">
          <img className="image" alt="Image" src="/img/image-8.png" />
          <div className="overlap-group">
            <div className="text-wrapper">Bright Buddy</div>
          </div>
        </div>
        <div className="overlap">
          <div className="overlap-2">
            <div className="question-section">
              <img
                className="question-time-can"
                alt="Question time can"
                src="/img/question-time-can-you-remember-what-max-and-lily-used-to-build.png"
              />
            </div>
            <img className="tts-icon" alt="Tts icon generation" src="/img/tts-icon-generation.png" />
          </div>
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-31.png" />
          <div className="option">
            <div className="text-wrapper-2">A gate</div>
          </div>
          <div className="option">
            <div className="text-wrapper-3">A flag</div>
          </div>
          <div className="option">
            <div className="text-wrapper-4">A bucket</div>
          </div>

          {/* Add a Link around the Next Page image */}
          <Link to="/reading-page">
            <img className="next-page-reading" alt="Next page reading" src="/img/next-page-incorrect.png" />
          </Link>

          {/* If you need additional links, add them as needed */}
          <Link className="prev-page-question" to="/">
            <img className="prev-page-question" alt="Prev page question" src="/img/prev-page-question-page.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
