import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { IfCorrectPage } from "./screens/IfCorrectPage";
import { Quiz } from "./screens/Quiz";
import { Total } from "./screens/Total";
import { TotalFrame } from "./screens/TotalFrame";
import { ReadingPage } from "./screens/ReadingPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/if-correct-page",
    element: <IfCorrectPage />,
  },
  {
    path: "/quiz-1",
    element: <Quiz />,
  },
  {
    path: "/total",
    element: <Total />,
  },
  {
    path: "/total-frame",
    element: <TotalFrame />,
  },
  {
    path: "/reading-page",
    element: <ReadingPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
