import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-6 md:flex-row md:justify-between justify-center flex flex-col items-center bg-[#d8d9d3] bg-no-repeat w-full h-screen object-cover bg-cover">
  
        <div className="font-bold gap-6 flex flex-col md:text-left items-center md:items-start mb-[6rem]">
          <h1 className="text-3xl md:text-4xl">
            Lets turn your website vistor's{" "}
            <span className="md:flex text-darkBlue md:text-left">
              logs into dream clients<br></br>
            </span>
          </h1>

          <p className="text-black text-md font-normal">
            capture your audience attention and convert your message{" "}
            <br className="md:flex hidden" />
            clearly and succinctly with exceptional delivery{""}
          </p>
          <a href="#gettingStarted"
            to="/projects"
            className="mt-3 flex text-black w-[200px] rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue"
          >
            Explore Services
          </a>
        </div>
      

      <div className="hidden md:flex mb-[4rem] shadow-sm">
        <img
          className="h-[23rem] w-[23rem] rounded-full brightness-50 border border-veryLightGray bg-no-repeat object-cover"
          src="/img/please.png"
        />
      </div>
    </section>
  );
};

export default Hero;
