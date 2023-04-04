import React from "react";
import Cards from "./Cards";
import { cards } from "../data";
import { techCards } from "../data";

const PageProfile = () => {
  return (
    <section className="px-2 w-full flex flex-col items-center text-center">
      <div className="bg-gradient-to-br w-full from-primaryBg to-gray-500 p-4 py-10 font-bold text-center text-3xl text-black">
        <h1 className="text-center">Blogpost Samples</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-10">
        {techCards.map((item,index) => (
          <Cards
            key={index}
            title={item.title}
            body={item.body}
            image={item.image}
            anchor={item.anchor}
          />
        ))}
      </div>
      <div className="bg-gradient-to-br w-full from-primaryBg to-gray-500 p-4 py-10 font-bold text-center text-3xl text-black">
        <h1 className="text-center">Portfolio Samples</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-10">
        {cards.map((item,index) => (
          <Cards
            key={index}
            title={item.title}
            body={item.body}
            image={item.image}
            anchor={item.anchor}
          />
        ))}
      </div>
    </section>
  );
};

export default PageProfile;

{
  /* <div className='flex p-2 flex-col bg-primaryBg md:flex-row'>
        <div className='flex flex-col justify-between items-center bg-white p-2 md:flex-row flex-wrap'>
          <div className='md:basis-[50%] lg:basis-[23%]'>

          </div>
          <div className='md:basis-[50%] lg:basis-[23%]'>

          </div>
          <div className='md:basis-[50%] lg:basis-[23%]'>

          </div>
          <div className='md:basis-[50%] lg:basis-[23%]'>

          </div>
        </div>
      </div> */
}
