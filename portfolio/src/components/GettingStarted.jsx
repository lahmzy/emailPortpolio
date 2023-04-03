import React from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <section className="px-4 mt-[5rem] bg-white flex flex-col">
      <div className="flex flex-col items-center text-center gap-4">
        <img src="/img/logo2.png" className="w-[6rem] h-[6rem] rounded-full" />
        <h1 className="font-bold text-3xl mt-2">
          Want contents, emails, that sounds like you, and spark genuine sales?
        </h1>
        <p className="text-veryDarkBlue">
          I help passionate Service based entrepreneurs create exactly that -
          and I'd love to collaborate we with you too
        </p>
      </div>
      <div id="gettingStarted" className=" bg-primaryBg md:py-3 pb-3 flex flex-col mt-20 md:flex-row flex-wrap justify-between items-center">
        <div className="flex-col md:border-r-2 text-center px-5 md:px-3 justify-between flex items-center gap-6 md:basis-[33%]">
          <img
            src="/img/started.jpg"
            className="w-full min-h-[400px] rounded-lg object-contain"
          />
          <h1 className="font-semibold text-2xl ">Email Copywriting</h1>
          <p className="text-darkBlue">
            Discover the done-for-you process that guarantess the heart of your
            clients with the most intrigued email copy - so your businesss can
            grow in a way that feels good
          </p>
          <Link
            to="/projects"
            className="w-[200px] flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue md:ml-0"
          >
            project sample
          </Link>
        </div>
        <div className="flex-col border-r-2 text-center px-5 md:px-4 justify-between flex items-center gap-6 md:basis-[33%]">
          <img
            src="/img/started2.jpg"
            className="w-full min-h-[400px] rounded-lg object-contain"
          />
          <h1 className="font-semibold text-2xl ">Blog Post</h1>
          <p className="text-darkBlue">
            Create something readers will love, capture your audience attention
            with search engine optimized and heartfelt words that actually
            converts - make your business stand out in a good way
          </p>
          <Link
            to="/projects"
            className="w-[200px] flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue md:ml-0"
          >
            project sample
          </Link>
        </div>
        <div className="flex-col text-center px-5 md:px-3 justify-between flex items-center gap-6 md:basis-[33%]">
          <img
            src="/img/started3.jpg"
            className="w-full min-h-[400px] rounded-lg object-contain"
          />
          <h1 className="font-semibold text-2xl ">Email Marketing</h1>
          <p className="text-darkBlue">
            Craft meticulous attention-grabbing email campaigns,with up to date
            trends that yields high engagement rates - so your businness strives
            towords success
          </p>
          <Link
            to="/projects"
            className="w-[200px] flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue md:ml-0"
          >
            project sample
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:py-5 py-1 bg-white">
        <div className="w-full md:w-1/2 md:mr-4 md:my-0 my-4 shadow-md hover:shadow-lg rounded-lg">
          <img
            className=" md:object-contain object-cover w-full h-auto md:h-80 rounded-lg"
            src="/img/me too.png"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-4 md:my-0 my-4 shadow-md hover:shadow-lg rounded-lg">
          <img
            className="object-contain w-full brightness-50 h-auto md:h-80 rounded-lg"
            src="/img/please.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
