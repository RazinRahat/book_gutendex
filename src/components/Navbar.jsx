import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-600 font-bold text-2xl">
              Gutendex
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-yellow-600 hover:text-red-400 hover:bg-yellow-200 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/wishlist"
              className="text-yellow-600 hover:text-red-400 hover:bg-yellow-200 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Wishlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-yellow-600 focus:outline-none transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-500 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-yellow-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 hover:text-red-400 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/wishlist"
            className="text-yellow-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 hover:text-red-400 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
