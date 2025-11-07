"use client";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function controlToggle() {
    setToggle(!toggle);
  }
  const links = [
    
    { name: "ABOUT", path: "/Home" },
    { name: "SERVICES", path: "/Services" },
    { name: "SAFETY POLICY", path: "/Safety" },
    { name: "GALLERY", path: "/Gallery" },
    { name: "LIST YOUR CAR WITH US", path: "/List" },
    { name: "CONTACT", path: "/" },
    { name: "BLOG", path: "/" },
  ];
  return (
    <nav className="bg-black fixed top-0  z-80 flex items-center  justify-between w-full lg:gap-60 text-white lg:px-15 px-8 ">
      {/* {toggle && <MobileMenu />} */}

      <img className="h-20 hover:scale-125" src="/sticker.webp"></img>
      <ul className="hidden lg:flex gap-8 ">
        {links.map((link) => (
          <li key={link.name} className="hover:scale-110">
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block"></div>

      <img
        onClick={controlToggle}
        src="/icons8-hamburger-menu (2).svg"
        className="flex lg:hidden w-6"
      ></img>
    </nav>
  );
}
