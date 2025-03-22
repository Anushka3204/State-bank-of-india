import React from "react";
import { FaUser, FaCreditCard, FaFileInvoice, FaPiggyBank, FaFileAlt, FaCogs, FaQuestionCircle, FaLink } from "react-icons/fa";

const Topbar = ({ topSelected, setTopSelected }) => {
  const menuItems = [
    { name: "My Accounts and Profile", icon: <FaUser /> },
    { name: "Payments", icon: <FaCreditCard /> },
    { name: "Bill Payments", icon: <FaFileInvoice /> },
    { name: "Deposits", icon: <FaPiggyBank /> },
    { name: "e-Tax", icon: <FaFileAlt /> },
    { name: "e-Services", icon: <FaCogs /> },
    { name: "Requests", icon: <FaQuestionCircle /> },
    { name: "Useful Links", icon: <FaLink /> },
  ];

  return (
    <div className="flex justify-center px-4 md:px-4 mt-6">
      <div className="bg-[#E8F1F9] shadow-lg rounded-xl p-3 flex flex-wrap justify-evenly items-center w-full max-w-7xl">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setTopSelected(item.name)}
            className="flex flex-col items-center w-24 md:w-32 cursor-pointer my-2 hover:scale-105 transition-transform"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full text-white text-xl md:text-2xl ${
                topSelected === item.name
                  ? "bg-[#2F2C77] ring-4 ring-[#C7DAFF] shadow-lg"
                  : "bg-[#3D3A89] hover:bg-[#4A47A3]"
              }`}
            >
              {item.icon}
            </div>
            <p className="text-xs md:text-sm text-center font-medium w-20 truncate mt-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
