import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { links } from "../data";
import Bars from "./Bars";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="flex shadow-lg  relative justify-between items-center p-6 bg-gradient-to-br w-full from-gray-400 to-primaryBg ">
      <div className="md:w-60 w-40 h-auto rounded-md px-2">
        <img src="/img/logo2.png" className="w-[5rem] h-[5rem] rounded-full" />
      </div>

      <div className="hidden md:flex">
        {links.map((item) => (
          <Bars key={item} navtems={item} />
        ))}
      </div>
      <div className="md:hidden">
        {menuIcon ? (
          <AiFillCloseCircle
            className="cursor-pointer hover:text-darkGrayishBlue"
            fontSize={30}
            onClick={() => setMenuIcon(false)}
          />
        ) : (
          <HiMenu
            className="cursor-pointer hover:text-darkGrayishBlue"
            fontSize={40}
            onClick={() => {
              setMenuIcon(true);
              setMobileMenu(false);
            }}
          />
        )}
      </div>

      {menuIcon && (
        <div
          className={`absolute flex flex-col ${
            mobileMenu && "hidden"
          }  top-[7rem] rounded-md items-center py-8 mt-10 font-semibold gap-2 shadow-md right-6 bg-white left-6 drop-shadow-md`}
        >
          {links.map((item) => (
            <div
              onClick={() => {
                setMenuIcon(false);
                setMobileMenu(true);
              }}
            >
              <Bars key={item} navtems={item} />
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
