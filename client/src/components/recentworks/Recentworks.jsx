import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../arrows";
import { Fade } from "react-awesome-reveal";
const Recentworks = () => {
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

  const slidesData = [
    {
      img: "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716249600&semt=ais_user",
      title: "Bluezone Wall & Vitrified",
      expo: "Yash Metal & Alloys IFEX Expo 2023, Greater Noida",
    },
    {
      img: "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716249600&semt=ais_user",
      title: "Greenery Decor Stand",
      expo: "Yash Metal & Alloys IFEX Expo 2023, Greater Noida",
    },
    {
      img: "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716249600&semt=ais_user",
      title: "Farmson Paracetamol People",
      expo: "Yash Metal & Alloys IFEX Expo 2023, Greater Noida",
    },
  ];

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Our Top Notch Recent Work
      </h2>
      <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-8 text-center">
        Our designer already made a lot of beautiful prototypes of rooms that
        inspire you.
      </p>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Fade cascade damping={0.1} duration={2000}>
            <div key={index} className="p-4">
              <div
                className="rounded-lg shadow-md overflow-hidden flex flex-col items-center relative mt-14"
                style={{ height: "700px" }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="object-cover"
                  style={{ height: "700px", width: "100%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 mb-6 bg-white bg-opacity-70 p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-gray-600">{slide.expo}</p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </Slider>
    </div>
  );
};

export default Recentworks;
