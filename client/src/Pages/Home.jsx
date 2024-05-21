import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/banner/Banner";
import Search from "../components/banner/Search";
import Gallery from "../components/Gallery/Gallery";
import Recentworks from "../components/recentworks/Recentworks";
import Exhibition from "../components/myservices/Exhibitions";
import ExhibitionCard from "../components/myservices/Exhibition1";

function Home() {
  return (
    <div>
      <div className="bg-pink-200 pt-60">
        <Navbar />
        <Banner />
        <Search />
        <Gallery/>
        <Recentworks/>
      
        <ExhibitionCard/>
      </div>
    </div>
  );
}

export default Home;
