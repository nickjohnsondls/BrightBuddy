import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const QuestionPage = () => {
  // Optional: You can add a handler function if you want to handle button clicks
  const handleOptionClick = (option) => {
    console.log(`You selected: ${option}`);
    // Add your logic here, e.g., check if the answer is correct
  };

  return (
    <div className="question-page">
      <div className="container">
        {/* Options moved to the front as buttons */}
        <div className="options-container">
          <button
            className="option-button"
            onClick={() => handleOptionClick("A gate")}
          >
            A gate
          </button>
          <button
            className="option-button"
            onClick={() => handleOptionClick("A flag")}
          >
            A flag
          </button>
          <button
            className="option-button"
            onClick={() => handleOptionClick("A bucket")}
          >
            A bucket
          </button>
        </div>

        {/* Header Frame */}
        <div className="frame">
          <img className="image" alt="Image" src="/img/image-8.png" />
          <div className="overlap-group">
            <div className="text-wrapper">Bright Buddy</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="overlap">
          <div className="overlap-2">
            <div className="question-section">
              <img
                className="question-time-can"
                alt="Question time can"
                src="/img/question-time-can-you-remember-what-max-and-lily-used-to-build.png"
              />
            </div>
            <img
              className="tts-icon"
              alt="Tts icon generation"
              src="/img/tts-icon-generation.png"
            />
          </div>
          <Link to ="/if-incorrect-page">
          <img
            className="rectangle"
            alt="Rectangle"
            src="/img/rectangle-31.png"
          />
          </Link>

          {/* Navigation Links */}
          <Link to="/">
            <img
              className="prev-page-question"
              alt="Prev page question"
              src="/img/prev-page-question-page.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
