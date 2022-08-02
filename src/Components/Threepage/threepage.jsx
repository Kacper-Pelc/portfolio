import React from "react";
import "./threepage.scss";
import { Link } from "react-router-dom";

const threepage = () => {
  return (
    <div className="threepage">
      <div className="threepage-container">
        <h1 className="threepage-container-first">
          {" "}
          <Link to="/">About</Link>
        </h1>
        <h1 className="threepage-container-second">
          <Link to="/Skills">Skills</Link>
        </h1>
        <h1 className="threepage-container-three">
          <Link to="/projects">Projects</Link>
        </h1>
        <h1 className="threepage-container-four">
          {" "}
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
      <div className="threepagee-text">
        <h1>Moje projekty! 👨‍💻</h1>
        <h2>MySaving - pisany na podstawie ReactJS + Sass + TailwindCSS</h2>
        <h2>Reszta w krotce...</h2>
        <h3>P.S Mam duzo projektow w glowie do wykonania</h3>
      </div>
    </div>
  );
};

export default threepage;
