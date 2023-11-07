import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { navLinks } from "../../data";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0 z-20 ">
      <div>
        <div className="container py-4 mx-auto flex items-center justify-between px-2">
          <div className="flex items-center  gap-4 ">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold ">
              Skillex
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray ">
            Sign Up
          </button>
          {toggle && (
            <div className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg  gap-8 py-8 ">
              {navLinks.map((navLink) => (
                <MobileNav
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              ))}
              <HiX
                className="absolute right-12 top-12 cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
