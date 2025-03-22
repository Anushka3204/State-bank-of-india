import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#232159] to-[#2F2C77] text-center text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <p className="text-md font-medium">
          © State Bank of India - Empowering Your Digital Future
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/SBI" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/sbi_official/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://twitter.com/SBI" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-green-500" />
          </a>
          <a href="https://in.pinterest.com/sbi" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="text-2xl hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
