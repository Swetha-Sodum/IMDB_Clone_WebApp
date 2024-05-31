import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[450px] w-[100vw] bg-center bg-cover bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1512263.jpg)`,
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-800 bg-opacity-60 text-white text-center w-full p-4">
        Welcome to Cinema World
      </div>
    </div>
  );
};

export default Banner;
