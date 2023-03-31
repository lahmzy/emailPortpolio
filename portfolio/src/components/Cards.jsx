import React from "react";

const Cards = ({ title, body, image,anchor }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
        <img src={image} className="h-56 object-cover w-full" />
        <div className="py-6 px-6">
          <h1 className="text-2xl font-bold mb-2 capitalize">{title}</h1>
          <p className="text-gray-700 text-base">{body}</p>
          <a 
            href={anchor} target="_blank"
            className="inline-block mt-3 font-semibold  text-black w-[200px] rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlu">
            See sample
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
