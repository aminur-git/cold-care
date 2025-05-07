import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";
import { BiSolidDonateHeart } from "react-icons/bi";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(/public/overlay.png), url(/public/poor-winter.jpeg) ",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        
      }}
    >
      <div className="hero-overlay">
      <Navbar></Navbar>
      </div>
      <div className="flex hero-overlay h-screen text-white">
        <div className="mw-w-5xl p-2 md:px-10 lg:px-20 "></div>
        <div className="mt-[25%] md:mt-[15%]">
          <div className="">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">
              Donate Warmth This Winter
            </h1>
            <p className="mb-5 max-w-xl text-gray-200">
            "Your unused winter clothes can be someone's only shield against the cold. Donate today and help us bring warmth and dignity to those who need it most."
            </p>
            <Link to={"/donate"} className="btn bg-[#067ba0] btn-wide border-none text-white"><span><BiSolidDonateHeart /></span> Donate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
