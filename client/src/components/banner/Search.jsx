import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

function Search() {
  const [locations, setLocations] = useState([]);
  const [boothSizes, setBoothSizes] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBoothSize, setSelectedBoothSize] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationResponse = await axios.get(
          "http://api.thepropshopworldwide.com/locationOptions"
        );
        const boothSizeResponse = await axios.get(
          "http://api.thepropshopworldwide.com/boothsizeOptions"
        );
        const budgetResponse = await axios.get(
          "http://api.thepropshopworldwide.com/budgetOptions"
        );

        setLocations(locationResponse.data);
        setBoothSizes(boothSizeResponse.data);
        setBudgets(budgetResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    setSelectedBoothSize("");
    setSelectedBudget("");
  };

  const handleBoothSizeChange = (e) => {
    setSelectedBoothSize(e.target.value);
    setSelectedBudget("");
  };

  return (
    <div className="mt-6">
      <div className="resp flex justify-center items-center p-4 space-x-4 gap-8">
        <div className="flex items-center">
          <select
            className="p-2 border rounded-md ml-4 h-16 w-60 font-bold xl:h-24 xl:w-96 xl:text-2xl"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Choose Your Location</option>
            {locations.map((location, index) => (
              <option key={index} value={JSON.stringify(location)}>
                {JSON.stringify(location)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <select
            className="p-2 border rounded-md h-16 w-60 font-bold xl:h-24 xl:w-96 xl:text-2xl"
            value={selectedBoothSize}
            onChange={handleBoothSizeChange}
            disabled={!selectedLocation}
          >
            <option value="">Choose Your Booth Size</option>
            {selectedLocation &&
              boothSizes.map((size, index) => (
                <option key={index} value={JSON.stringify(size)}>
                  {JSON.stringify(size)}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center">
          <select
            className="p-2 border rounded-md h-16 w-60 font-bold xl:h-24 xl:w-96 xl:text-2xl"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            disabled={!selectedBoothSize}
          >
            <option value="">Choose Your Budget</option>
            {selectedBoothSize &&
              budgets.map((budget, index) => (
                <option key={index} value={JSON.stringify(budget)}>
                  {JSON.stringify(budget)}
                </option>
              ))}
          </select>
        </div>
        <button className="p-2 bg-red-500 text-white rounded-md h-16 w-60 font-bold xl:w-72 xl:h-24 xl:text-3xl">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
