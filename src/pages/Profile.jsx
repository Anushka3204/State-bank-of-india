import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdAccountCircle, MdLock, MdGroup, MdNotifications,
  MdSettings, MdPayment, MdHelpOutline, MdFingerprint,
  MdSecurity, MdMobileFriendly, MdExitToApp
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Profile = () => {
  // Set default sidebar selection to "Profile"
  const [topSelected, setTopSelected] = useState("My Accounts and Profile");
  const [sideSelected, setSideSelected] = useState("Profile");

  // Profile options (as shown in your image)
  const profileOptions = [
    { label: "My Profile", icon: <MdAccountCircle /> },
    { label: "Change Password", icon: <MdLock /> },
    { label: "Manage Beneficiaries", icon: <MdGroup /> },
    { label: "Notifications", icon: <MdNotifications /> },
    { label: "Account Settings", icon: <MdSettings /> },
    { label: "Payment Methods", icon: <MdPayment /> },
    { label: "Set Security Questions", icon: <MdHelpOutline /> },
    { label: "Biometric Login Setup", icon: <MdFingerprint /> },
    { label: "Privacy Settings", icon: <MdSecurity /> },
    { label: "Mobile Banking Settings", icon: <MdMobileFriendly /> },
    { label: "Logout", icon: <MdExitToApp /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] font-[Poppins] transition-all">
      <Navbar />
      <div className="h-24"></div>
      <Topbar topSelected={topSelected} setTopSelected={setTopSelected} />
 
 



      {/* Sidebar & Content */}
      <div className="mt-6 px-4 md:px-8 flex flex-col md:flex-row gap-6">
        <Sidebar sideSelected={sideSelected} setSideSelected={setSideSelected} />

        {/* Content Section: PROFILE OPTIONS */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#D8F1F9] p-4">
              <h3 className="font-bold text-[#2F2C77] text-xl text-left">
                PROFILE OPTIONS
              </h3>
            </div>
            <div className="p-4">
              {/* Animated profile options grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {profileOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-md cursor-pointer hover:bg-gray-200 transition-all"
                  >
                    <div className="w-16 h-16 bg-[#C7DAFF] rounded-full flex items-center justify-center mb-2">
                      <span className="text-3xl text-[#2F2C77]">{option.icon}</span>
                    </div>
                    <p className="text-[#2F2C77] font-semibold text-center text-sm">
                      {option.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
