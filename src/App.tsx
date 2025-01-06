import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import mainRoute from "./Routes/MainRouter";

function App() {
  return (
    <>
      <RouterProvider router={mainRoute} />
    </>
  );
}

export default App;
