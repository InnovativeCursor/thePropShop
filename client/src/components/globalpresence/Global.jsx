import React from "react";
import "./Global.css";

const GlobalPresence = () => {
  return (
    <div className="global-presence">
      <h1>Global presence</h1>
      <p>
        Indulge yourself in our experiential array of exhibition stall design
        that has wowed the world.
      </p>
      <div className="stats">
        <div className="stat">
          <h2>7+</h2>
          <p>Continents</p>
        </div>
        <div className="stat">
          <h2>30+</h2>
          <p>Countries</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Cities</p>
        </div>
      </div>
      <div className="map">
        <img
          src="https://miro.medium.com/v2/resize:fit:918/1*e4mtcIuvCzwtCtuWqI52xA.png"
          alt="World Map"
        />
        <div className="locations">
          <div className="location" style={{ top: "60%", left: "25%" }}>
            Cape Town, South Africa
          </div>
          <div className="location" style={{ top: "40%", left: "45%" }}>
            Location 2
          </div>
          <div className="location" style={{ top: "30%", left: "65%" }}>
            Location 3
          </div>
          <div className="location" style={{ top: "50%", left: "85%" }}>
            Location 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
