// AboutUsComponent.js
import React from "react";
import style from './aboutus.module.css'
const AboutUsComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-left absolute ">
          <h2 className="text-4xl text-gray-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-4 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top-Tier Exhibition Stall <br /> Designer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Being the leading Exhibition Stall Designing and build-up agency,
            our committed in-house production team meticulously pre-assembles
            and thoroughly inspects every stand before delivery - guaranteeing
            the highest quality stall designs available across the globe. Being
            the leading Exhibition Stall Designing and build-up agency, our
            committed in-house production team meticulously pre-assembles and
            thoroughly inspects every stand before delivery - guaranteeing the
            highest quality stall designs available across the globe.
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row items-center justify-between lg:items-start ">
          <div className=" h-28" style={{ marginLeft: "700px" }}>
            <img
              className="rounded-3xl shadow-lg"
              style={{ height: "600px" }}
              src="https://www.roofingmegastore.co.uk/media/wysiwyg/1._St._Paul_s_Cathedral_UK-min.jpg"
              alt="Exhibition Stall Design"
            />
          </div>
        </div>

        <div className="mt-80 xl:mt-96 px-11 mr-36 z-10 sticky xl:w-2/3 ">
          <div className="flex flex-col md:flex-col p-24 md:px-7 lg:flex-col xl:flex-row justify-around bg-red-500 text-white py-8 px-4 rounded-lg shadow-md">
            <div className="text-center">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-lg">Year Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1100+</p>
              <p className="text-lg">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">5000+</p>
              <p className="text-lg">Exhibition Stalls Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">80+</p>
              <p className="text-lg">Specialized Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
