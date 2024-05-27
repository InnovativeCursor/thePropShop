import React, { useState, useEffect } from "react";
import axios from "axios";

const AwardWinning = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://api.thepropshopworldwide.com/awardWinning"
        );
        setProjects(response.data); 
        console.log(response.data,'award')
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects.</div>;

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          Check Our Collection
        </button>
        <h1 className="text-4xl font-bold mt-4">Award Winning</h1>
        <p className="text-lg mt-2">
          Indulge yourself in our experiential array of exhibition stall design
          that has wowed the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <img
              src={project.pictures[0].url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 items-start justify-start opacity-0 flex-col group-hover:opacity-100 transition-opacity flex mt-40 pt-16 h-32 w-72">
              <h2 className="text-black font-bold text-lg">{project.title}</h2>
              <button className="bg-red-500 text-white flex left-0 rounded-md h-20 w-32 font-bold mb-8">
                See project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardWinning;
