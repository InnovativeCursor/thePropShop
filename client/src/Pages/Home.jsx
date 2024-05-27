import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/banner/Banner";
import Search from "../components/banner/Search";
import Gallery from "../components/Gallery/Gallery";
import Recentworks from "../components/recentworks/Recentworks";
import ExhibitionCard from "../components/myservices/Exhibition1";
import AwardWinning from "../components/awardwinning/Awardwinning";
import AboutUsComponent from "../components/aboutus/AboutUs";
import GlobalPresence from "../components/globalpresence/Global";
import LogoSlider from "../components/LogoSlider/LogoSlider";
import ContactForm from "../components/Contactform/ContactForm";
import Footer from "../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="bg-pink-200 pt-60 ">
        <Navbar />
        <Banner />
        <Search />
        <Fade>

        <Gallery />
        </Fade>
      </div>
      <Fade duration={2000}>
      <Recentworks />
      </Fade>
      <Fade>

      <ExhibitionCard />
      </Fade>
      <Fade>

      <AwardWinning />
      </Fade>
      <Fade>

      <AboutUsComponent />
      </Fade>
      <Fade>

      <GlobalPresence />
      </Fade>
      <LogoSlider />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
