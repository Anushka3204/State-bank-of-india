import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AccountSummary = () => {
  // State for top bar and sidebar selections.
  const [topSelected, setTopSelected] = useState("My Accounts and Profile");
  const [sideSelected, setSideSelected] = useState("Account Summary");
  const [balances, setBalances] = useState({});
  const [expandedRow, setExpandedRow] = useState(null);

  const handleBalanceClick = (id) => {
    setBalances({ ...balances, [id]: "₹25,000" }); // Example balance
  };

  const toggleRow = (rowId) => {
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] font-[Poppins] transition-all"
    >
      <Navbar />
      <div className="h-24"></div>
      
      {/* Top Menu Icons */}
      <Topbar topSelected={topSelected} setTopSelected={setTopSelected} />

   

      {/* Sidebar & Content */}
      <div className="mt-6 px-4 md:px-8 flex flex-col md:flex-row gap-6">
        <Sidebar sideSelected={sideSelected} setSideSelected={setSideSelected} />

        {/* Content Section: Transaction & Deposit Accounts */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-3/4 space-y-6 p-1"
        >
         {/* Transaction Accounts Section */}
<div className="bg-white rounded-lg shadow-lg">
  <div className="bg-[#D8F1F9] p-3 rounded-t-lg w-full">
    <h3 className="font-bold text-[#2F2C77] text-lg w-full">
      TRANSACTION ACCOUNTS
    </h3>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full text-base border border-gray-300 rounded-b-lg">
      <thead className="bg-[#E6E9F5]">
        <tr>
          <th className="p-3 text-left">Account No.</th>
          <th className="p-3 text-left">Branch</th>
          <th className="p-3 text-left">Available Balance</th>
          <th className="p-3 text-left">Transactions</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((index) => (
          <React.Fragment key={`transaction-${index}`}>
            <motion.tr
              whileHover={{ backgroundColor: "#f0f0f0" }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200"
            >
              <td className="p-3">1020xxxxxxxxx</td>
              <td className="p-3">Mumbai</td>
              <td className="p-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    handleBalanceClick(`transaction-${index}`)
                  }
                  className="text-blue-600 hover:underline"
                >
                  {balances[`transaction-${index}`] ||
                    "Click here for balance"}
                </motion.button>
              </td>
              <td className="p-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleRow(`transaction-${index}`)}
                  className="text-blue-600 hover:underline"
                >
                  {expandedRow === `transaction-${index}`
                    ? "Hide Transactions"
                    : "See last 10 transactions"}
                </motion.button>
              </td>
            </motion.tr>
            {expandedRow === `transaction-${index}` && (
              <tr className="bg-white">
                <td colSpan="4" className="p-4">
                  {/* Nested Table for Last 10 Transactions */}
                  <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <div className="bg-[#D8F1F9] p-3 rounded-t-lg">
                      <h3 className="font-bold text-[#2F2C77] text-lg">
                        Last 10 Transactions
                      </h3>
                    </div>
                    <table className="w-full text-base">
                      <thead className="bg-[#E6E9F5]">
                        <tr>
                          <th className="p-2 text-left">Date</th>
                          <th className="p-2 text-left">Description</th>
                          <th className="p-2 text-left">Amount</th>
                          <th className="p-2 text-left">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <tr
                            key={i}
                            className="border-t border-gray-200 hover:bg-gray-100 transition-all"
                          >
                            <td className="p-2">
                              2025-01-{i < 10 ? `0${i}` : i}
                            </td>
                            <td className="p-2">Transaction {i}</td>
                            <td className="p-2">
                              ₹{(i * 1000).toLocaleString()}
                            </td>
                            <td className="p-2">
                              ₹{(10000 - i * 1000).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
</div>


          {/* Deposits Accounts Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-x-auto"
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#D8F1F9] p-3 rounded-t-lg">
              <h3 className="font-bold text-[#2F2C77] text-lg">
                DEPOSITS ACCOUNTS
              </h3>
            </div>
            <div className="border border-gray-300 rounded-b-lg">
              <table className="w-full text-base">
                <thead className="bg-[#E6E9F5]">
                  <tr>
                    <th className="p-3 text-left">Deposit ID</th>
                    <th className="p-3 text-left">Branch</th>
                    <th className="p-3 text-left">Maturity Amount</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((index) => (
                    <motion.tr
                      key={`deposit-${index}`}
                      className="border-t border-gray-200 hover:bg-gray-100 transition-all"
                    >
                      <td className="p-3">FD20xxxxx{index}</td>
                      <td className="p-3">Delhi</td>
                      <td className="p-3">₹50,000</td>
                      <td className="p-3">Active</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Additional Deposit Information */}
            <motion.div
              className="p-4 bg-[#F8FBFF] rounded-b-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-md font-md text-[#2F2C77]">
                Upcoming Maturity :{" "}
                <span className="text-[#D9534F] font-bold">
                  March 30, 2025
                </span>
              </p>
              <p className="text-md font-md text-[#2F2C77]">
                Interest Rate :{" "}
                <span className="text-[#3A477A] font-bold">5.5% p.a.</span>
              </p>
              <p className="text-md font-md text-[#2F2C77]">
                Total Deposits :{" "}
                <span className="text-[#3A477A] font-bold">₹1,00,000</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default AccountSummary;
