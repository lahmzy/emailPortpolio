import React from "react";
import {IoMdHand} from "react-icons/io"


const About = () => {
  return (
    <section className="w-full bg-white">
      <div className="bg-gradient-to-br w-full from-primaryBg to-gray-500 p-4 py-4 font-bold text-center text-3xl text-black">
        <h1 className="text-center">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center hover:shadow-lg shadow-md py-5 px-4">
        <div className=" md:w-1/2 flex md:ml-10 py-10">
          <img
            className="h-80 w-80 border rounded-full object-cover"
            src="/img/kleen.png"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 py-10">
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-semibold capitalize">Hey,What's Up? Hello</h1>
            <IoMdHand fontSize={20} className="text-yellow-500"/>
          </div>
          <p className="text-base mt-2 pb-1 font-medium text-veryDarkBlue">I'm olusanya olamide michael but fondly <br className="hidden md:flex"/> called Lahmzy by my friends.</p>
          <p className="text-base my-1 font-medium text-veryDarkBlue">I deliver attention grabbing blogposts, email copies <br className="hidden md:flex"/>that engage customers and drive them to convert.</p>
          <p className="text-base my-1 font-medium text-veryDarkBlue">I'm a sport persons and I love watching sports during the weekend,<br className="hidden md:flex"/> I support chelsea football club.</p>
          <p className="text-base my-1 font-medium text-veryDarkBlue">whether you need a one off content,email campaign,<br/>i'm here to help.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
