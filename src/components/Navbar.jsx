import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Listen for scroll events to update background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for background transition
  const navVariants = {
    initial: {
      backgroundColor: "rgba(255, 255, 255, 0.56)",
    },
    scrolled: {
      backgroundColor: "rgba(255,255,255,0.7)",
    },
  };

  return (
    <motion.nav
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      className="w-full backdrop-blur-md shadow-sm fixed top-0 z-50"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Main container with increased side padding */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Left: SBI Logo */}
        <div className="flex items-center h-20">
          <img
            src="/assets/images/sbi-logo.png"
            alt="SBI Logo"
            className="h-full"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden mr-5">
          {isOpen ? (
            <AiOutlineClose
              onClick={toggleMenu}
              className="text-2xl text-[#2F2C77] cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={toggleMenu}
              className="text-2xl text-[#2F2C77] cursor-pointer"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-[#2F2C77] font-medium text-md">
          <li className="cursor-pointer hover:opacity-80">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:opacity-80">
            Corporate Website
          </li>
          <li className="cursor-pointer hover:opacity-80">FAQ</li>
          {/* "हिंदी" as a button */}
          <li>
            <button className="border border-[#2F2C77] text-[#2F2C77] bg-white px-4 py-2 rounded-md hover:bg-[#2F2C77] hover:text-white transition-colors duration-200">
              हिंदी
            </button>
          </li>
          {/* Sign Up */}
          <li>
            <Link to="/signup">
              <button className="bg-[#2F2C77] text-white px-4 py-2 rounded-md hover:bg-[#232159] transition-colors duration-200">
                Sign Up
              </button>
            </Link>
          </li>
          {/* Login */}
          <li>
            <Link to="/login">
              <button className="border border-[#2F2C77] text-[#2F2C77] bg-white px-4 py-2 rounded-md hover:bg-[#2F2C77] hover:text-white transition-colors duration-200">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/30 backdrop-blur-md px-6 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-3 mt-2 text-[#2F2C77] font-medium text-base">
              <li className="cursor-pointer hover:opacity-80">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="cursor-pointer hover:opacity-80">
                Corporate Website
              </li>
              <li className="cursor-pointer hover:opacity-80">FAQ</li>
              {/* "हिंदी" as a button */}
              <li>
                <button className="border border-[#2F2C77] text-[#2F2C77] bg-white px-4 py-2 rounded-md hover:bg-[#2F2C77] hover:text-white transition-colors duration-200">
                  हिंदी
                </button>
              </li>
              {/* Sign Up */}
              <li>
                <Link to="/signup">
                  <button className="bg-[#2F2C77] text-white w-full px-4 py-2 rounded-md hover:bg-[#232159] transition-colors duration-200">
                    Sign Up
                  </button>
                </Link>
              </li>
              {/* Login */}
              <li>
                <Link to="/login">
                  <button className="border border-[#2F2C77] text-[#2F2C77] bg-white w-full px-4 py-2 rounded-md hover:bg-[#2F2C77] hover:text-white transition-colors duration-200">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
