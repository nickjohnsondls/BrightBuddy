import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import IfCorrectPage from "./screens/IfCorrectPage";
//import IfIncorrectPage from "./screens/IfIncorrectPage";
import ReadingPage from "./screens/ReadingPage";
import QuestionPage from "./screens/QuestionPage"; // Import your new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/reading-page" element={<ReadingPage/>} />
        <Route path="/question-page" element={<QuestionPage/>} />
        <Route path="/if-correct" element={<IfCorrectPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
