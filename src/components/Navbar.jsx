import React from "react";
import Profile from "./Profile";
import logo from "../assets/bankkaro/bankkaro.png";
import { FaChevronDown } from "react-icons/fa";
import border from "../assets/bankkaro/border.png";
import Text from "../commonComponents/Text";
import Image from "../commonComponents/Image";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "OUR PRODUCTS",
      icon: <FaChevronDown className="mt-0.5 ml-0.5" />,
    },
    {
      id: 2,
      title: "TOOLS",
      icon: <FaChevronDown className="mt-0.5 ml-0.5" />,
    },
    { id: 3, title: "BLOGS", icon: "" },
    { id: 4, title: "ABOUT US", icon: "" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center py-4 bg-gradient-to-r from-black to-gray w-full">
        <Image url={logo} alt="logo" classes="h-4 w-24 ml-10 cursor-pointer" />
        <div className="flex justify-between w-1/3 text-xs">
          {navItems.map((item) => {
            return (
              <div className="flex" >
               <Text  classes="cursor-pointer" text={item.title} /> {item.icon && item.icon}
              </div>
            );
          })}
        </div>
        <div className="mr-16">
          <Profile />
        </div>
      </nav>
      <Image url={border} classes="w-full" />
    </>
  );
};

export default Navbar;
