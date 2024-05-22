import React from "react";

const AwardWinning = () => {
  return (
    <div className="container mx-auto py-10 bg-white">
      <div className="text-center mb-8">
        <button
          className=" text-red-500 py-2 px-4 rounded-full mb-4 font-bold text-2xl"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          Check Our Collection
        </button>
        <h2 className="text-5xl font-bold">Award Winning</h2>
        <p className="mt-5 text-gray-600">
          Indulge yourself in our experiential array of exhibition stall design
          that has wowed the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://c8.alamy.com/comp/DE5W4Y/fast-food-stall-st-giles-fair-oxford-DE5W4Y.jpg"
            alt="Stall 1"
            className="w-full h-auto"
          />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://c8.alamy.com/comp/DE5W4Y/fast-food-stall-st-giles-fair-oxford-DE5W4Y.jpg"
            alt="Stall 2"
            className="w-full h-auto"
          />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://c8.alamy.com/comp/DE5W4Y/fast-food-stall-st-giles-fair-oxford-DE5W4Y.jpg"
            alt="Stall 3"
            className="w-full h-auto"
          />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://c8.alamy.com/comp/DE5W4Y/fast-food-stall-st-giles-fair-oxford-DE5W4Y.jpg"
            alt="Stall 4"
            className="w-full h-auto"
          />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://c8.alamy.com/comp/D42TPE/pink-and-aqua-food-stall-at-the-blue-hill-fair-maine-D42TPE.jpg"
            alt="Stall 5"
            className="w-full h-auto"
          />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLLERsnzAt1rzJh6StaInR-3zeZJaz8qWunKV3Yp-EKCcZdalaK32rDBLhu6ryJEB3BE&usqp=CAU"
            alt="Stall 6"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardWinning;
