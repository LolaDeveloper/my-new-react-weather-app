import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <p className="Footer text-center mt-3">
        😎This project was coded by{" "}
        <a
          href="https://lola-portfolio.netlify.app//"
          title="View source code"
          target="_blank"
          rel="noreferrer"
        >
          Funmilola
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/LolaDeveloper/my-new-react-weather-app"
          title="View source code"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
      </p>
    </footer>
  );
}
