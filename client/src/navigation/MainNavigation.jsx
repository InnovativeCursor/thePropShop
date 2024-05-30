import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'

import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedSearch from "../Pages/RelatedSearch";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



function MainNavigation() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <>
      {loading ? (
        <>
        </>
      ) : (
        <>
        {/* <Navbar/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/our-work" element={<RelatedSearch />} />
            
          </Routes>
          <ToastContainer
            position="top-center"
            theme="light"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        {/* <Footer/> */}
        </>
      )}
    </>
  );
}

export default MainNavigation;
