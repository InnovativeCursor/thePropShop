import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'

import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
          <Routes>
            <Route exact path="/" element={<Home />} />
            
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
        </>
      )}
    </>
  );
}

export default MainNavigation;
