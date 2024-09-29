import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making API calls
import "./style.css";

const IfIncorrectPage = () => {
  const [userInput, setUserInput] = useState(""); // State to hold user input
  const [response, setResponse] = useState(""); // State to hold the AI response

  // Function to handle the API call
  const handleGenerate = async () => {
    try {
      const result = await axios.post("http://localhost:5001/api/generate", {
        userInput,
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error("Error communicating with the backend:", error);
    }
  };

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
        </div>

        {/* Input box for user to type prompt */}
        <div className="prompt-container">
          <input
            type="text"
            className="prompt-input"
            placeholder="Ask BrightBuddy Here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="generate-button" onClick={handleGenerate}>
            Ask
          </button>
        </div>

        {/* Display the AI response */}
        {response && (
          <div className="response-container">
            <p className="response-text">{response}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default IfIncorrectPage;
