import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/account_summary"); // Navigate to account summary
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] pt-32 flex flex-col items-center font-poppins">
      <Navbar />
      <div className="w-full max-w-5xl px-4 sm:px-9 flex flex-col sm:flex-row items-center justify-center">
        {/* Animation on larger screens */}
        <div className="hidden sm:block w-1/3 flex justify-end mr-[190px]">
          <DotLottieReact
            src="https://lottie.host/05b9cfe4-677e-4284-9385-ade5b2f34eaa/Kf88OBgxDw.lottie"
            loop
            autoplay
            className="w-[400px] h-[400px] sm:w-[900px] sm:h-[500px] ml-[-250px] mr-[40px]"
          />
        </div>

        {/* Login Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2F2C77] rounded-xl p-8 sm:p-10 mb-12 w-full sm:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2C77] text-center mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            {["Username", "Password"].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <label className="text-[#2F2C77] text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={label.includes("Password") ? "password" : "text"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F2C77] transition-all duration-200 bg-[#F8F9FD]"
                />
              </motion.div>
            ))}
            <div className="flex justify-end text-sm text-[#2F2C77]">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-40 bg-[#2F2C77] text-white py-2 rounded-md hover:bg-[#232159] transition-colors duration-200 mb-6"
              >
                Login
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Animation below the login box on smaller screens */}
      <div className="sm:hidden mt-[-40px] flex justify-center">
        <DotLottieReact
          src="https://lottie.host/05b9cfe4-677e-4284-9385-ade5b2f34eaa/Kf88OBgxDw.lottie"
          loop
          autoplay
          className="w-[300px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default Login;
