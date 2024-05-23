import React from "react";
import "./Global.css";
import { CiLocationOn } from "react-icons/ci";

const GlobalPresence = () => {
  return (
    <div className="global-presence">
      <h1 className="font-bold">Global presence</h1>
      <p className="text-2xl">
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
          src="https://motherlinesusa.com/assets/image/Africa.jpg"
          alt="World Map"
        />
        <div className="locations">
          <div className="location" style={{ top: "40%", left: "55%" }}>
            <CiLocationOn /> South Africa
          </div>
          <div className="location" style={{ top: "32%", left: "68%" }}>
            <CiLocationOn /> India
          </div>
          <div className="location" style={{ top: "19%", left: "70%" }}>
            <CiLocationOn /> Russia
          </div>
          <div className="location" style={{ top: "44%", left: "87%" }}>
            <CiLocationOn /> Australia
          </div>
          <div className="location" style={{ top: "34%", left: "18%" }}>
            <CiLocationOn /> Brazil
          </div>
          <div className="location" style={{ top: "20%", left: "30%" }}>
            <CiLocationOn /> Canada
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
