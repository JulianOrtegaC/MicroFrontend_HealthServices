// main.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/Login.css";
import "../src/styles/Home.css";
import "../src/styles/Error404.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default Main;
