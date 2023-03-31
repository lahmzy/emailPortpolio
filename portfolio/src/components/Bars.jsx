import React from 'react'
import { NavLink } from 'react-router-dom'

const isNotActiveStyle =
  "flex items-center px-5 gap-3 hover:text-black text-gray-500 transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex px-5 gap-3 font-extrabold md:border-r-2 border-black transition-all duration-200 ease-in-out capitalize";


const Bars = ({navtems}) => {
  return (
    <div>
        <NavLink
            to={navtems}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            {navtems}
          </NavLink>
    </div>
  )
}

export default Bars