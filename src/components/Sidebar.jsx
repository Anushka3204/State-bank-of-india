import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sideSelected, setSideSelected }) => {
  const navigate = useNavigate();
  const sidebarItems = [
    "Account Summary",
    "Profile",
    "Account Statement",
    "Deposits",
    "Pending Transactions",
    "Additional Info",
    "Pending Status",
  ];

  const handleSidebarClick = (item) => {
    setSideSelected(item);
    if (item === "Profile") {
      navigate("/profile");
    } else if (item === "Account Statement") {
      navigate("/account_statement");
    } else if (item === "Account Summary") {
      navigate("/account_summary");
    }
    // Add further navigation logic if needed.
  };

  return (
    <div className="w-full md:w-1/4 bg-[#E6E9F2] rounded-lg p-4 shadow-md">
      {/* Welcome Header */}
      <div className="mb-4 text-center font-bold text-lg text-[#2F2C77]">
        WELCOME XXXXXXXX47474
      </div>
      <ul className="space-y-3">
        {sidebarItems.map((item) => (
          <li
            key={item}
            onClick={() => handleSidebarClick(item)}
            className={`p-3 rounded-lg text-base font-medium shadow-md cursor-pointer transition-all ${
              sideSelected === item
                ? "bg-[#2F2C77] text-white font-semibold"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
