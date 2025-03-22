import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";

// React icons
import {
  FaUserTie,
  FaBuilding,
  FaUserPlus,
  FaQuestionCircle,
  FaHeadset,
  FaLock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";

const Landing = () => {
  // For Important Links Toggle
  const allImportantLinks = [
    "Register Complaint of Unauthorized Transaction",
    "RBI Retail Direct portal",
    "Block ATM Card",
    "Banking Forms",
    "Doorstep Banking",
    "SBI General Insurance Document Download",
    "SBI FasTag",
    "SBI Salary Account",
    "NRI Services",
    "Fair Lending Practice Code",
    "SBI Securities",
    "SBI Express Remit",
    "SBI Mutual Fund",
    "SBI Life Insurance",
    "SBI Card",
    "OnlineSBI Global",
    "Foreign Travel/EZ-Pay/Gift Cards",
    "SBI General Insurance",
    "Cash Management Product",
    "State Bank Loyalty Rewardz",
    "GSTN Updation",
    "eSBTR Challan Generation",
    "Noida Metro Card",
    "SBICAP Trustee Company Ltd My WILL Services Online",
    "Nagpur Metro Card",
    "Loan Repayment via Digital Mode (ePay)",
    "Linking of PAN with Aadhaar",
    "Current Account",
    "Aadhaar Seeding Service: BASE",
  ];
  const initialLinks = allImportantLinks.slice(0, 8);
  const extraLinks = allImportantLinks.slice(8);
  const [showAllLinks, setShowAllLinks] = useState(false);

  // Initialize navigate hook
  const navigate = useNavigate();

  // Use a container class with extra side padding
  const containerClass = "max-w-screen-xl mx-auto w-full px-6 md:px-10";

  return (
    <div
      className="text-md min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] pt-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Second Row of Links with horizontal slider */}
      <motion.ul
        className={`
          ${containerClass}
          mt-3
          flex
          items-center
          space-x-3
          overflow-x-auto
          whitespace-nowrap
          text-[#2F2C77]
          font-medium
          pb-2
          scrollbar-hide
          mx-auto
          ml-23
        `}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li className="bg-[#EFF9FD] px-5 py-2 rounded-md hover:shadow-sm cursor-pointer">
          B Collect
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          Donations
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          Videos
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          mCash
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          SBI Unip
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          SBI Unipay
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          SBI Loans
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-md cursor-pointer">
          Apply for SB / Current Account
        </li>
        <li className="bg-[#EFF9FD] px-3 py-2 rounded-md hover:shadow-sm cursor-pointer">
          SBIePay Lite
        </li>
      </motion.ul>

      {/* 3. Carousel Banner with Multiple Images */}
      <motion.div
        className={`${containerClass} mt-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-lg overflow-hidden shadow-md">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={4000}
            emulateTouch
          >
            <div>
              <img
                src="/assets/images/banner1.png"
                alt="Loan Banner 1"
                className="object-cover w-full"
              />
            </div>
            <div>
              <img
                src="/assets/images/banner2.jpg"
                alt="Loan Banner 2"
                className="object-cover w-full"
              />
            </div>
            <div>
              <img
                src="/assets/images/banner3.jpg"
                alt="Loan Banner 3"
                className="object-cover w-full"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>

      {/* 4. Personal & Corporate Banking (Symmetrical Cards) */}
      <motion.div
        className={`${containerClass} mt-20 grid grid-cols-1 md:grid-cols-2 gap-10`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* PERSONAL BANKING CARD */}
        <motion.div
          className="bg-[#EFF9FD] rounded-xl border border-[#2F2C77]/40 p-4 flex flex-col hover:shadow-md transition-transform"
          whileHover={{ y: -2 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative -mt-16 mb-4">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-[#2F2C77]/40 flex items-center justify-center mx-auto shadow-sm">
                <FaUserTie className="text-[#2F2C77] text-4xl" />
              </div>
            </div>
            <h2 className="text-[#2F2C77] text-lg font-semibold mb-2">
              Personal Banking
            </h2>
            <button className="bg-[#2F2C77] text-white px-5 py-2 rounded-md hover:bg-[#232159] transition-colors">
              Login
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-4 w-full max-w-[220px] mx-auto">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#E6F2FF] text-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:opacity-80"
            >
              <FaUserPlus className="text-xl" />
              <span className="text-center text-xs">
                New User Registration/Activation
              </span>
            </button>
            <button className="bg-white text-[#2F2C77] border border-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:bg-[#2F2C77] hover:text-white transition-colors">
              <FaQuestionCircle className="text-xl" />
              <span className="text-center text-xs">How Do I ?</span>
            </button>
            <button className="bg-white text-[#2F2C77] border border-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:bg-[#2F2C77] hover:text-white transition-colors">
              <FaHeadset className="text-xl" />
              <span className="text-center text-xs">Customer Care</span>
            </button>
            <button className="bg-white text-[#2F2C77] border border-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:bg-[#2F2C77] hover:text-white transition-colors">
              <FaLock className="text-xl" />
              <span className="text-center text-xs">Lock and Unlock User</span>
            </button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-4 px-2">
            SBI's internet banking portal provides personal banking services that
            give you complete control over your banking demands online.
          </p>
        </motion.div>

        {/* CORPORATE BANKING CARD */}
        <motion.div
          className="bg-[#EFF9FD] rounded-xl border border-[#2F2C77]/40 p-4 flex flex-col hover:shadow-md transition-transform mt-8 md:mt-0"
          whileHover={{ y: -2 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative -mt-16 mb-4">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-[#2F2C77]/40 flex items-center justify-center mx-auto shadow-sm">
                <FaBuilding className="text-[#2F2C77] text-4xl" />
              </div>
            </div>
            <h2 className="text-[#2F2C77] text-lg font-semibold mb-2">
              Corporate Banking
            </h2>
            <button className="bg-[#2F2C77] text-white px-5 py-2 rounded-md hover:bg-[#232159] transition-colors">
              Login
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-4 w-full max-w-[220px] mx-auto">
            <button className="bg-[#E6F2FF] text-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:opacity-80">
              <FaUserPlus className="text-xl" />
              <span className="text-center text-xs">
                New Corporate Registration
              </span>
            </button>
            <button className="bg-white text-[#2F2C77] border border-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:bg-[#2F2C77] hover:text-white transition-colors">
              <FaQuestionCircle className="text-xl" />
              <span className="text-center text-xs">How Do I ?</span>
            </button>
            <button className="bg-white text-[#2F2C77] border border-[#2F2C77] py-2 rounded-md flex flex-col items-center gap-1 hover:bg-[#2F2C77] hover:text-white transition-colors">
              <FaHeadset className="text-xl" />
              <span className="text-center text-xs">Customer Care</span>
            </button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-4 px-2">
            Corporate Banking application to administer and manage non-personal
            accounts online.
          </p>
        </motion.div>
      </motion.div>

      {/* 5. Horizontal Marquee Box */}
      <motion.div className={`${containerClass} mt-12 px-3`}>
        <div className="bg-[#EFF9FD] rounded-xl border border-[#2F2C77]/40 overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-red-500 text-xs font-medium py-3"
            animate={{ x: ["100%", "-200%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <span className="mx-2">
              Customers can now deposit Income Tax/Corporate Taxes using all Bank Debit Cards and Credit Cards under State Bank Payment Gateway
            </span>
            <span className="mx-2">|</span>
            <span className="mx-2">
              Mandatory Profile password change after 365 days introduced for added security
            </span>
            <span className="mx-2">|</span>
            <span className="mx-2">
              Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre
            </span>
            <span className="mx-2">|</span>
            <span className="mx-2">
              SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links asking for your bank details.
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* 6. Important Links with Toggle */}
      <motion.div
        className="max-w-screen-2xl  ml-7 mr-7 mt-16 sm:mt-20 bg-white rounded-xl p-3 shadow-lg lg:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-[#2F2C77] text-lg font-semibold mb-6">
          IMPORTANT LINKS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
          {initialLinks.map((link, index) => (
            <button
              key={index}
              className="w-full bg-[#EFF9FD] text-[#2F2C77] px-4 py-4 rounded-md hover:opacity-80 text-center text-sm"
            >
              {link}
            </button>
          ))}
          <AnimatePresence>
            {showAllLinks &&
              extraLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className="w-full bg-[#EFF9FD] text-[#2F2C77] px-4 py-2 rounded-md hover:opacity-80 text-center text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  {link}
                </motion.button>
              ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAllLinks(!showAllLinks)}
            className="border border-[#2F2C77] text-[#2F2C77] px-4 py-2 rounded-md hover:bg-[#2F2C77] hover:text-white transition-colors duration-200 text-xs"
          >
            {showAllLinks ? "Show Less" : "More links"}
          </button>
        </div>
      </motion.div>

      {/* 7. Footer */}
      <motion.footer
        className="w-full bg-gradient-to-r from-[#232159] to-[#2F2C77] text-center text-white py-4 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto w-full px-4">
          <p className="text-md font-medium">
            © State Bank of India - Empowering Your Digital Future
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com/SBI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com/sbi_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a
              href="https://twitter.com/SBI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl hover:text-green-500" />
            </a>
            <a
              href="https://in.pinterest.com/sbi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="text-2xl hover:text-red-500" />
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Landing;
