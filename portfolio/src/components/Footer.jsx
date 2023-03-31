import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { links } from "../data";
import { NavLink } from "react-router-dom";

const isNotActiveStyle =
  "flex items-center gap-3 hover:text-black text-gray-500 transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex gap-3 font-extrabold  border-black transition-all duration-200 ease-in-out capitalize";


const Footer = () => {
  return (
    <footer className="flex flex-col py-5 px-4 gap-5 md:items-center bg-primaryBg">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold capitalize text-xl">Olusanya Michael</h3>
        <p className="text-darkGrayishBlue text-base ">
          7 Olusanya street,Lagos State | olusanya544@gmail.com
        </p>
        <div className="flex gap-2 text-gray-500">
          <a href="https://facebook.com/michael.olusanya.31?mibextid=ZbWKwL" target="_blank"><BsFacebook  fontSize={20} className="hover:text-black"/></a>
          <a href="https://twitter.com/lahmzymic?t=2GH_plnP6IcHoqohoKB5uA&s=09" target="_blank"><AiOutlineTwitter fontSize={20} className="hover:text-black" /> </a>
          <a href="https://www.linkedin.com/in/olusanya-olamide-ab70411a4" target="_blank"><AiFillLinkedin fontSize={20} className="hover:text-black"/></a>
          <a href="https://wa.me/2349028674636" target="_blank"><AiOutlineWhatsApp  fontSize={20} className="hover:text-black" /></a>
        </div>

        <div className="flex flex-col mt-3">
        {links.map((item)=>(
          <NavLink 
            key={item} 
            to={item}
            className={({isActive}) => isActive? isActiveStyle : isNotActiveStyle}
          >
            {item}
          </NavLink>
        ))}
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;
