import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/banner/Banner";
import Search from "../components/banner/Search";
import Gallery from "../components/Gallery/Gallery";
import Recentworks from "../components/recentworks/Recentworks";
import Exhibition from "../components/myservices/Exhibitions";
import ExhibitionCard from "../components/myservices/Exhibition1";
import AwardWinning from "../components/awardwinning/Awardwinning";
import AboutUsComponent from "../components/aboutus/AboutUs";
import GlobalPresence from "../components/globalpresence/Global";

function Home() {
  return (
    <div>
      <div className="bg-pink-200 pt-60 overflow-hidden">
        <Navbar />
        <Banner />
        <Search />
        <Gallery />
      </div>
      <Recentworks />
      <ExhibitionCard />
      <AwardWinning />
      <AboutUsComponent/>
      <GlobalPresence/>
    </div>
  );
}

export default Home;
