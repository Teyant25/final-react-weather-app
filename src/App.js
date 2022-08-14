import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Tya Kent and is open-sourced on {""}{" "}
          <a
            href="https://github.com/Teyant25/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
