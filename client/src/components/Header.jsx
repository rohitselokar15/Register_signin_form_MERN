import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" font-semibold shadow-xl flex justify-between px-3 h-16 items-center relative">
      <div>
        <p className="cursor-pointer">Logo</p>
      </div>

      {/* Hamburger Button for Small and Medium Devices */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-black"></i>
      </div>

      {/* Menu Container for Small and Medium Devices */}
      <div
        className={`lg:flex absolute top-16 left-0 right-0 bg-gray-200 mx-24 my-3 py-4 rounded-xl ${
          menuOpen ? "block" : "hidden"
        } lg:static lg:bg-transparent lg:p-0`}
      >
        <ul className="flex flex-col items-center lg:flex-row lg:items-center">
          <li className="lg:ml-10 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="lg:ml-10 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="lg:ml-10 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="lg:ml-10 cursor-pointer">
            <Link to="/login">
              <button className="bg-blue-300 p-1 px-3 mt-1.5 lg:mt-0 lg:bg-blue-700 lg:text-white rounded-md lg:p-1.5 lg:px-6">
                Login
              </button>
            </Link>
          </li>
          <li className="lg:ml-10 cursor-pointer">
            <Link to="/register">
              <button className=" bg-blue-300 p-1 px-3 my-2 lg:my-0 lg:bg-blue-700 lg:text-white rounded-md lg:p-1.5 lg:px-4">
                Register
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
