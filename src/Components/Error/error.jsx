import React from "react";
import "./error.scss";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <div className="error">
      <div className="error-container">
        <h1 className="error-container-first">
          {" "}
          <Link to="/">About</Link>
        </h1>
        <h1 className="error-container-second">
          <Link to="/Skills">Skills</Link>
        </h1>
        <h1 className="error-container-three">
          {" "}
          <Link to="/projects">Projects</Link>
        </h1>
        <h1 className="error-container-four">
          {" "}
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
      <div className="error-title">
        <h1>Error 404 0_o</h1>
      </div>
      <div className="error-text">
        <h1>Cos czego szuka to tu nie ma ¯\_(ツ)_/¯ </h1>
        <h1>wszystko co wazne masz na gorze ☝☝☝☝</h1>
      </div>
    </div>
  );
};

export default error;
