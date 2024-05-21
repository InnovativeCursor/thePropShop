import React from "react";
import "./Exhibition.css";
import { FaSignalMessenger } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";

const Exhibition1 = () => {
  return (
    <div className="p-8 bg-pink-100">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-700 text-xl">
          Join us in shaping the future of exhibitions, where creativity knows
          no bounds and design knows <br /> no limits. Choose from our services
          for your next remarkable journey in exhibition excellence.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center ml-32">
        <div className="lg:w-1/2 p-4">
          <h3 className="text-5xl font-bold mb-4">Modular Exhibition</h3>
          <p className="text-gray-700 mb-4 text-xl">
            Propshop pioneers modular exhibition solutions, crafting versatile
            and adaptable stands that effortlessly <br /> fit diverse exhibition
            spaces. Our modular designs offer <br /> flexibility and efficiency,
            ensuring a seamless setup and an impactful <br /> presence at
            exhibitions globally.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded h-20 w-44 font-bold text-2xl mt-4">
            Know More
          </button>
        </div>
        <div className="lg:w-1/2 p-4 relative">
          <img
            src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt="Exhibition Stand"
            className="rounded shadow-lg"
            style={{ height: "700px", width: "600px" }}
          />
          <div className="absolute top-14 -left-7 bg-white p-2 rounded shadow-lg">
            <img
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
              alt="Mark Anderson"
              className="rounded-full mr-2 inline-block h-14 w-14"
            />
            <div className="inline-block">
              <p className="font-bold">Mark Anderson</p>
              <div className="flex flex-row gap-6">
                <p className="text-sm text-gray-600">Furniture Craftsmanship</p>
                <FaSignalMessenger className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </div>
          <div className="absolute -mt-96 -left-14 bg-red-500 p-2 h-12 w-12 rounded-xl shadow-lg -rotate-45">
            <LuUserCheck className="bg-red-500  h-7 w-7 text-white" />
          </div>
          <div className="absolute bottom-4 right-14 bg-white p-2 rounded-lg shadow-lg flex items-center h-20 mr-7">
            <span className="material-icons text-red-500 font-bold">
              <CiCircleCheck />
            </span>
            <p className="ml-2 text-xl">We think about every detail</p>
          </div>
        </div>
      </div>

      {/* New exhibition section with image on the left and text on the right */}
      <div className="flex flex-col lg:flex-row-reverse items-center ml-32 mt-12">
        <div className="lg:w-1/2 p-4">
          <h3 className="text-5xl font-bold mb-4">Best spoke Exhibition</h3>
          <p className="text-gray-700 mb-4 text-xl">
            With meticulous attention to detail and personalized creativity,
            Propshop creates unique, custom-built stands that resonate with your
            brand identity, elevating your presence and leaving a lasting
            impression at every exhibition
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded h-20 w-44 font-bold text-2xl mt-4">
            Know More
          </button>
        </div>
        <div className="lg:w-1/2 p-4 relative">
          <img
            src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt="Exhibition Stand"
            className="rounded shadow-lg"
            style={{ height: "700px", width: "600px" }}
          />
          <div className="absolute top-14 -left-7 bg-white p-2 rounded-xl shadow-lg">
            <img
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
              alt="Jane Doe"
              className="rounded-full mr-2 inline-block h-14 w-14"
            />
            <div className="inline-block">
              <p className="font-bold">Jane Doe</p>
              <div className="flex flex-row gap-6">
                <p className="text-sm text-gray-600">Furniture Craftman</p>
                <FaSignalMessenger className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </div>
          <div className="absolute -mt-96 -left-14 bg-red-500 p-2 h-12 w-12 rounded-xl shadow-lg -rotate-45">
            <LuUserCheck className="bg-red-500  h-7 w-7 text-white" />
          </div>
          <div className="absolute bottom-4 left-14  bg-white p-2 rounded-lg shadow-lg flex items-center h-20 ml-80">
            <span className="material-icons text-red-500 font-bold">
              <CiCircleCheck />
            </span>
            <p className="ml-2 text-xl">We think about every detail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition1;
