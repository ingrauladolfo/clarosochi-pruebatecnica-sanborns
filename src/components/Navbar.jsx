// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/logo-sochi.webp"
            alt="Left Logo"
            className="h-auto lg:h-16 w-auto max-w-[30%] sm:max-w-[20%]"
          />
          <img
            src="/img/logo-claro-sports.webp"
            alt="Right Logo"
            className="h-auto lg:h-16 w-auto max-w-[30%] sm:max-w-[20%]"
          />
        </div>
      </nav>
      <hr className="border-[#e4210b] border-2" />
    </div>
  );
};

export default Navbar;
