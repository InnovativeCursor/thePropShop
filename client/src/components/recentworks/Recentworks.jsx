import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../arrows";

const Recentworks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <h2 className="text-5xl font-bold mb-4">Our Top Notch Recent Work</h2>
      <p className="text-gray-600 text-2xl mb-8">
        Our designer already made a lot of beautiful prototype of rooms that
        inspire you
      </p>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="p-4">
            <div className=" rounded-lg shadow-md overflow-hidden flex flex-col items-center relative mt-14" style={{height:'700px'}}>
              <img
                src={slide.img}
                alt={slide.title}
                className="object-cover"
                style={{ height: "700px", width: "350px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 mb-6 bg-white bg-opacity-70 p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                <p className="text-gray-600">{slide.expo}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recentworks;
