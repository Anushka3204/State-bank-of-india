import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSyncAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any additional logic here (such as form validation)
    // then navigate to the login page.
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] pt-32 flex flex-col items-center font-poppins">
      <Navbar />
      <div className="w-full max-w-5xl px-4 sm:px-9">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2F2C77] rounded-xl p-8 sm:p-10 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2C77] text-center mb-6">
            New user Registration
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {["Username", "Set Password", "Confirm Password"].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <label className="text-[#2F2C77] text-sm font-medium mb-1">{label}</label>
                <input
                  type={label.includes("Password") ? "password" : "text"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F2C77] transition-all duration-200 bg-[#F8F9FD]"
                />
              </motion.div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Account Number", "Branch Code", "CIF Number"].map((label, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <label className="text-[#2F2C77] text-sm font-medium mb-1">{label}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F2C77] transition-all duration-200 bg-white"
                  />
                  {label === "Account Number" && (
                    <p className="text-xs text-gray-500 mt-1">
                      (Account Number is available in your passbook and/or statement of account)
                    </p>
                  )}
                  {label === "Branch Code" && (
                    <p className="text-xs text-gray-500 mt-1">
                      (Please enter a 5-digit branch code)
                    </p>
                  )}
                  {label === "CIF Number" && (
                    <p className="text-xs text-gray-500 mt-1">
                      (CIF Number is available in your passbook and/or statement of account)
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div className="flex flex-col">
              <label className="text-[#2F2C77] text-sm font-medium mb-1">Enter Captcha</label>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F2C77] transition-all duration-200"
                />
                <div className="w-32 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-gray-100 shadow-inner relative">
                  <span className="text-xs text-gray-700 font-semibold">EJDHSJE</span>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    className="absolute right-1 top-1 text-gray-600"
                    title="Refresh captcha"
                  >
                    <FaSyncAlt />
                  </motion.button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2 w-5 h-5" />
                <label htmlFor="terms" className="text-sm text-[#2F2C77]">
                  I agree
                </label>
                <input type="checkbox" id="disagree" className="ml-4 mr-2 w-5 h-5" />
                <label htmlFor="disagree" className="text-sm text-[#2F2C77]">
                  I disagree
                </label>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                After onboarding on SBI Online, the created user ID will be enabled for login through YONO and YONO Lite as well, in addition to SBI Online.
                By clicking on 'I Agree' you hereby give consent for the same. Please do not share your login credentials with anyone.
              </p>
            </motion.div>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-40 bg-[#2F2C77] text-white py-2 rounded-md hover:bg-[#232159] transition-colors duration-200 mb-6"
              >
                Register
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
