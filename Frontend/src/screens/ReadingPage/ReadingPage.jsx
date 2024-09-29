import React from "react";
import { Link } from "react-router-dom";
import { Libary1 } from "../../icons/Libary1";
import "./style.css";

export const ReadingPage = () => {
  return (
    <div className="reading-page">
      <div className="div-5">
        <Link className="logo-3" to="/homepage">
          <img className="img-2" alt="Image" src="/img/image-5.png" />
          <img className="subtract-3" alt="Subtract" src="/img/subtract.svg" />
          <div className="text-wrapper-32">Bright Buddy</div>
          <img className="img-2" alt="Logo icon" src="/img/image-5.png" />
        </Link>
        <div className="navbar-3">
          <img className="ellipse-11" alt="Ellipse" src="/img/ellipse-9.svg" />
          <div className="frame-47" />
          <div className="frame-48">
            <div className="text-wrapper-33">My Bookshelf</div>
          </div>
          <div className="frame-49">
            <div className="text-wrapper-34">About Me</div>
          </div>
          <div className="libary-wrapper">
            <Libary1 className="libary" color="#BCBCBC" />
          </div>
        </div>
        <img className="incorrect-slide" alt="Incorrect slide" src="/img/incorrect-slide-bunny-image.png" />
        <img className="not-quite-can" alt="Not quite can" src="/img/not-quite-can-brightbuddy-help-you.png" />
        <img className="img-3" alt="Next page incorrect" src="/img/next-page-incorrect.png" />
        <img className="img-4" alt="Previous page" src="/img/previous-page-incorrect.png" />
        <img className="STT-incorrect-page" alt="Stt incorrect page" src="/img/stt-incorrect-page.png" />
        <div className="text-box-print">
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
        </div>
        <img className="bunny-background-og" alt="Bunny background og" src="/img/bunny-background-og.png" />
        <div className="question-question">
          <div className="rectangle-7" />
          <img
            className="question-time-can"
            alt="Question time can"
            src="/img/question-time-can-you-remember-what-max-and-lily-used-to-build.png"
          />
        </div>
        <img className="img-3" alt="Rectangle" src="/img/next-page-incorrect.png" />
        <div className="choice-c">
          <img className="ellipse-12" alt="Ellipse" src="/img/ellipse-23.svg" />
          <div className="text-wrapper-35">A gate</div>
        </div>
        <div className="choice-b">
          <img className="ellipse-13" alt="Ellipse" src="/img/ellipse-22.svg" />
          <div className="text-wrapper-36">A flag</div>
        </div>
        <div className="choice-a">
          <img className="ellipse-13" alt="Ellipse" src="/img/ellipse-22.svg" />
          <div className="text-wrapper-37">A bucket</div>
        </div>
        <img className="img-4" alt="Prev page question" src="/img/previous-page-incorrect.png" />
        <img className="TTS-icon-generation" alt="Tts icon generation" src="/img/image-13.png" />
        <img className="bunny-background" alt="Bunny background" src="/img/bunny-background-reading-page.png" />
        <div className="rectangle-8" />
        <p className="text-wrapper-38">
          “Together, they built more towers, laughing and chatting. Mother Rabbit helped them make walls and a gate.
          They even added a stick flag on top for the final touch.”
        </p>
        <img className="image-7" alt="Image" src="/img/image-13.png" />
        <img className="previous-page" alt="Previous page" src="/img/previous-page-incorrect.png" />
        <img className="next-page-reading" alt="Next page reading" src="/img/next-page-incorrect.png" />
        <img className="STT-reading-page" alt="Stt reading page" src="/img/stt-incorrect-page.png" />
      </div>
    </div>
  );
};
