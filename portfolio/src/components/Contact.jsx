import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="px-4 bg-white flex flex-col p-3 items-center md:flex-row justify-evenly">
      <div className="py-10 flex flex-col items gap-4 border px-2 rounded-lg text-center md:w-1/3 md:text-left md:py-20">
        <h1 className="text-3xl font-bold"> Contact Me</h1>
        <p className="text-base font-medium text-normal mt-5 text-black">
          I'f you're interested in working with me or have any questions,{" "}
          
          please don't hesistate to reach out.
        </p>
        <p className="text-base my-2 font-medium text-black text-normal]">Be assured you are in the right place to get the best copywriter for your business.</p>
        <p className="text-base font-medium text-black text-normal]">I'm more than happy to hear from you.</p>
      </div>
      <div className="pt-5 w-4/5 md:w-1/5 pb-3 md:py-20">
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="https://www.facebook.com/michael.olusanya.31?mibextid=ZbWKwL" target="_blank"
              className="flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue"
            >Facebook <BsFacebook className="" fontSize={17}/></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/olusanya-olamide-ab70411a4" target="_blank"
              className="flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue "
            >LinkedIn <AiFillLinkedin fontSize={20}/> </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lahmzymic?t=2GH_plnP6IcHoqohoKB5uA&s=09" target="_blank"
              className=" flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue "
            >Twitter <AiOutlineTwitter fontSize={20}/></a>
          </li>
          <li>
            <a
              href="https://wa.me/2349028674636" target="_blank"
              className="flex items-center justify-center rounded-full border pt-2 px-6 p-3 hover:bg-darkBlue cursor-pointer bg-darkGrayishBlue "
            >WhatsApp <AiOutlineWhatsApp fontSize={19}/></a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
