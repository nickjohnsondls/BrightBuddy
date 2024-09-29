import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const QuestionPage = () => {
  //const navigate = useNavigate();

  const handleOptionClick = (option) => {
    console.log(`You selected: ${option}`);
  };

  return (
    <div className="question-page">
      <div className="container">

        {/* Header Frame */}
        <div className="frame">
          <Link to="/">
            <img className="image" alt="Image" src="/img/image-8.png" />
            <div className="overlap-group">
              <div className="text-wrapper">Bright Buddy</div>
            </div>
          </Link>
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

          {/* Options moved below tts-icon */}
          <div className="options-container">
          <Link to="/if-incorrect-page"> <button
              className="option-button"
              onClick={() => handleOptionClick("A gate")}
            >
              A gate
            </button>
            </Link>
            <Link to="/if-incorrect-page">
            <button
              className="option-button"
              onClick={() => handleOptionClick("A flag")}
            >
              A flag
            </button>
            </Link>
            <Link to="/if-correct-page">
            <button
              className="option-button"
              onClick={() => handleOptionClick("A bucket")}
            >
              A bucket
            </button>
            </Link>
          </div>

            <img
              className="rectangle"
              alt="Rectangle"
              src="/img/rectangle-31.png"
            />

          {/* Navigation Links */}
          <Link to="/reading-page">
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
