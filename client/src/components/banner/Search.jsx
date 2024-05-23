import React, { useState } from "react";
import './Search.css'
function Search() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBoothSize, setSelectedBoothSize] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const boothSizes = {
    "Location 1": ["Small", "Medium", "Large"],
    "Location 2": ["Medium", "Large", "Extra Large"],
    "Location 3": ["Small", "Large"],
  };

  const budgets = {
    Small: ["Budget 1", "Budget 2"],
    Medium: ["Budget 3", "Budget 4"],
    Large: ["Budget 5", "Budget 6"],
    "Extra Large": ["Budget 7", "Budget 8"],
  };

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
      <div className="resp flex justify-center items-center p-4 space-x-4 gap-8 ">
        <div className="flex items-center ">
          <select
            className="p-2 border rounded-md ml-4 h-16 w-60 font-bold"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Choose Your Location</option>
            {Object.keys(boothSizes).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <select
            className="p-2 border rounded-md h-16 w-60 font-bold"
            value={selectedBoothSize}
            onChange={handleBoothSizeChange}
            disabled={!selectedLocation}
          >
            <option value="">Choose Your Booth Size</option>
            {selectedLocation &&
              boothSizes[selectedLocation].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center">
          <select
            className="p-2 border rounded-md h-16 w-60 font-bold"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            disabled={!selectedBoothSize}
          >
            <option value="">Choose Your Budget</option>
            {selectedBoothSize &&
              budgets[selectedBoothSize].map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
          </select>
        </div>
        <button className="p-2 bg-red-500 text-white rounded-md h-16 w-60 font-bold">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
