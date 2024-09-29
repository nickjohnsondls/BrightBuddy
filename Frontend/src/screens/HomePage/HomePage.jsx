import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="overlap-2">
              <img className="READ-MORE" alt="Read MORE" src="/img/read-more.png" />
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-34.svg" />
              <img className="included-book" alt="Included book" src="/img/included-book.svg" />
            </div>
            <div className="overlap-3">
              <img className="img" alt="Rectangle" src="/img/rectangle-33.png" />
              <div className="group">
                <div className="overlap-4">
                  <div className="group-2">
                    <div className="frame">
                      <div className="text-wrapper">All books</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Preschool</div>
                    </div>
                  </div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="text-wrapper-3">Kindergarten</div>
              <div className="group">
                <div className="overlap-4">
                  <div className="group-2">
                    <div className="frame">
                      <div className="text-wrapper">All books</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Preschool</div>
                    </div>
                  </div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <Link to="/reading-page">
                <img className="love-you-to-moon" alt="Love you to moon" src="/img/rectangle-33.png" />
              </Link>
            </div>
            <div className="overlap-5">
              <div className="group-3">
                <div className="frame">
                  <div className="text-wrapper-2">Grade 1-3</div>
                </div>
                <div className="frame-2">
                  <div className="text-wrapper-2">Grade 4-6</div>
                </div>
              </div>
              <div className="group-3">
                <div className="frame">
                  <div className="text-wrapper-2">Grade 1-3</div>
                </div>
                <div className="frame-2">
                  <div className="text-wrapper-2">Grade 4-6</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-6">
            <div className="i-love-you-to-the-wrapper">
              <p className="i-love-you-to-the">
                I Love You to the <br />
                Moon and Back
              </p>
            </div>
            <div className="i-love-you-to-the-wrapper">
              <p className="i-love-you-to-the">
                I Love You to the <br />
                Moon and Back
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="group-4">
            <div className="overlap-group-2">
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-9-1.svg" />
              <div className="frame-3">
                <div className="text-wrapper-4">About Me</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-5">My Bookshelf</div>
            </div>
            <div className="iconly-light-outline" />
          </div>
          <div className="group-5">
            <div className="frame-5">
              <div className="text-wrapper-5">My Bookshelf</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-4">About Me</div>
            </div>
            <div className="bookshelf-icon" />
          </div>
        </div>
        <div className="ten-tiny-toes-wrapper">
          <img className="ten-tiny-toes" alt="Ten tiny toes" src="/img/rectangle-35.png" />
        </div>
        <div className="heart-wrapper">
          <img className="heart" alt="Heart" src="/img/heart-1.png" />
        </div>
        <div className="overlap-8">
          <p className="p">Included: A book for ALL children</p>
        </div>
        <div className="reading-time-icon-wrapper">
          <img className="reading-time-icon" alt="Reading time icon" src="/img/image-12.png" />
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-7">10-15 min</div>
          <div className="text-wrapper-7">10-15 min</div>
        </div>
        <div className="logo">
          <div className="image-wrapper">
            <img className="image" alt="Image" src="/img/image-8.png" />
          </div>
          <div className="overlap-10">
            <div className="text-wrapper-8"></div>
            <img className="subtract" alt="Subtract" src="/img/subtract-1.svg" />
            <div className="text-wrapper-8">Bright Buddy</div>
          </div>
        </div>
        <div className="text-wrapper-9">Ten Tiny Toes</div>
      </div>
    </div>
  );
};

export default HomePage;