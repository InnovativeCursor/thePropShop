import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../arrows";
import { Fade } from "react-awesome-reveal";

const Recentworks = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.thepropshopworldwide.com/products",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setSlidesData(response.data.products);
        console.log(response.data
          
        )
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left xl:text-6xl xl:mt-6">
        Our Top Notch Recent Work
      </h2>
      <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-8 text-left xl:text-4xl">
        Our designer already made a lot of beautiful prototypes of rooms that
        inspire you.
      </p>
      <Slider {...settings}>
        {slidesData.length > 0 ? (
          slidesData.map((slide, index) => (
            <Fade cascade damping={0.1} duration={2000} key={index}>
              <div className="p-4">
                <div
                  className="rounded-lg shadow-md overflow-hidden flex flex-col items-center relative mt-14"
                  style={{ height: "900px", 
                   }}
                >
                  <img
                    src={slide.pictures[0].url}
                    alt={slide.product_name} 
                    className="object-cover"
                    style={{ height: "900px", width: "100%",  }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 mb-6 bg-white bg-opacity-70 p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {slide.product_name}
                    </h3>{" "}
                  
                    <p className="text-gray-600">{slide.key_highlights}</p>{" "}
                
                  </div>
                </div>
              </div>
            </Fade>
          ))
        ) : (
          <div className="text-center">No data available</div>
        )}
      </Slider>
    </div>
  );
};

export default Recentworks;
