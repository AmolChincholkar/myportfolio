import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter
import { DarkModeProvider } from "./DarkModeContext"; // Import the provider
import reportWebVitals from "./reportWebVitals";
import "./Assets/scss/Style.scss";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>  {/* Wrap the entire app with DarkModeProvider */}
      <HashRouter>
        <Header />
        <Home />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </HashRouter>
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
