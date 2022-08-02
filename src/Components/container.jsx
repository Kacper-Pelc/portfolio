import React from "react";
import "./container.scss";

import me from "../assets/me.png";

const container = () => {
  return (
    <div className="container">
      <div className="container-dashboard">
        <img className="container-dashboard-img" src={me} alt="me" />
        <div className="container-dashboard-text">
          <h2>Kacper Pelc</h2>
          <h3>linkedin/Kacper-pelc</h3>
          <h3>Github.com/Kacper-pelc</h3>
          <h3>Facebook.com/KacperPelc</h3>
          <h3>dc Klapek#0700</h3>
        </div>
      </div>
    </div>
  );
};

export default container;
