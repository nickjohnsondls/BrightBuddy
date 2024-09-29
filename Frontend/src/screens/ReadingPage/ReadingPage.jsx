import React from "react";
import { Link } from "react-router-dom";
import { Libary } from "../../icons/Libary";
import "./style.css";

const ReadingPage = () => {
  return (
    <div className="reading-page">
      <div className="div-3">

        {/* Main Content */}
        <img
          className="incorrect-slide"
          alt="Incorrect slide"
          src="/img/incorrect-slide-bunny-image.png"
        />
        <img
          className="not-quite-can"
          alt="Not quite can"
          src="/img/not-quite-can-brightbuddy-help-you.png"
        />

        {/* First Next Page Button */}
        <Link to="/question-page">
          <img
            className="next-page-reading"
            alt="Next page reading"
            src="/img/next-page-incorrect.png"
          />
        </Link>

        {/* Previous Page Button */}
        <img
          className="previous-page"
          alt="Previous page"
          src="/img/previous-page-incorrect.png"
        />

        {/* Navbar */}
        {/* <div className="navbar">
          <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-9.svg" />
          <div className="frame-7" />
          <div className="frame-8">
            <div className="text-wrapper-12">My Bookshelf</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-13">About Me</div>
          </div>
          <div className="libary-wrapper">
            <Libary className="status-active" color="#BCBCBC" />
          </div>
        </div> */}

        {/* Other Components */}
        <img
          className="STT-incorrect-page"
          alt="STT incorrect page"
          src="/img/stt-incorrect-page.png"
        />
        <div className="text-box-print">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
        </div>
        <div className="frame-10">
        <Link to="/"><img className="image-3" alt="Image" src="/img/image-8.png" />
          <img className="subtract-2" alt="Subtract" src="/img/subtract.svg" />
          <div className="text-wrapper-14">Bright Buddy</div>
        </Link>
        </div>
        <img
          className="bunny-background-og"
          alt="Bunny background original"
          src="/img/bunny-background-og.png"
        />

        {/* Question Section */}
        <div className="question-question">
          <div className="rectangle-6" />
          <img
            className="question-time-can"
            alt="Question time can"
            src="/img/question-time-can-you-remember-what-max-and-lily-used-to-build.png"
          />
        </div>
        <div className="frame-11">
          <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-23.svg" />
          <div className="text-wrapper-15">A gate</div>
        </div>
        <div className="frame-12">
          <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-22.svg" />
          <div className="text-wrapper-16">A flag</div>
        </div>
        <div className="frame-13">
          <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-22.svg" />
          <div className="text-wrapper-17">A bucket</div>
        </div>
        <img
          className="img-3"
          alt="Previous page question"
          src="/img/previous-page-incorrect.png"
        />
        <img
          className="TTS-icon-generation"
          alt="TTS icon generation"
          src="/img/tts-icon-generation.png"
        />
        <img
          className="bunny-background"
          alt="Bunny background"
          src="/img/bunny-background-reading-page.png"
        />

        {/* Reading Text */}
        <div className="rectangle-7" />
        <p className="text-wrapper-19">
          “Together, they built more towers, laughing and chatting. Mother Rabbit
          helped them make walls and a gate. They even added a stick flag on top
          for the final touch.”
        </p>
        <img
          className="previous-page"
          alt="Previous page"
          src="/img/previous-page-incorrect.png"
        />

        {/* Second Next Page Button */}
        <Link to="/question-page">
          <img
            className="next-page-reading"
            alt="Next page reading"
            src="/img/next-page-incorrect.png"
          />
        </Link>

        <img
          className="STT-reading-page"
          alt="STT reading page"
          src="/img/stt-incorrect-page.png"
        />
      </div>
    </div>
  );
};

export default ReadingPage;
