import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AccountStatement = () => {
  const [topSelected, setTopSelected] = useState("My Accounts and Profile");
  const [sideSelected, setSideSelected] = useState("Account Statement");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [showStatement, setShowStatement] = useState(false);
  const [filterType, setFilterType] = useState("By Date");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const accountOptions = [
    { id: "1", number: "XXXXXXXX1234", type: "Savings" },
    { id: "2", number: "XXXXXXXX5678", type: "Current" },
    { id: "3", number: "XXXXXXXX9012", type: "PPF" },
  ];

  const transactions = [
    { date: "2024-03-10", description: "Amazon Purchase", amount: "-₹1,200", balance: "₹15,800" },
    { date: "2024-03-08", description: "Salary Credit", amount: "+₹50,000", balance: "₹17,000" },
    { date: "2024-03-06", description: "Electricity Bill", amount: "-₹2,200", balance: "₹12,000" },
    { date: "2024-03-02", description: "Movie Tickets", amount: "-₹600", balance: "₹14,200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7DD4F3] via-[#99DDF5] to-[#FFFFFF] font-[Poppins] transition-all">
      <Navbar />
      <div className="h-24"></div>
      <Topbar topSelected={topSelected} setTopSelected={setTopSelected} />

 

      {/* Sidebar & Content */}
      <div className="mt-6 px-4 md:px-8 flex flex-col md:flex-row gap-6">
        <Sidebar sideSelected={sideSelected} setSideSelected={setSideSelected} />

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-lg">
            {/* Account Statement Header */}
            <h3 className="text-xl font-bold text-[#2F2C77] bg-[#D8F1F9] p-4 rounded-t-lg w-full">
              ACCOUNT STATEMENT
            </h3>

            {/* Content Section */}
            <div className="p-6 mt-4 ml-4">
              {/* Select Account */}
              <p className="font-medium text-gray-700">Select an Account</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {accountOptions.map((acc) => (
                  <label
                    key={acc.id}
                    className={`flex items-center justify-between border p-3 rounded cursor-pointer transition-all ${
                      selectedAccount === acc.number ? "border-[#2F2C77] bg-blue-100" : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="account"
                      value={acc.number}
                      checked={selectedAccount === acc.number}
                      onChange={() => setSelectedAccount(acc.number)}
                      className="hidden"
                    />
                    <span className="text-gray-700">{acc.type} - {acc.number}</span>
                    <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center">
                      {selectedAccount === acc.number && <div className="w-3 h-3 bg-[#2F2C77] rounded-full"></div>}
                    </div>
                  </label>
                ))}
              </div>

              {/* Selection Options */}
              {!showStatement ? (
                <motion.div className="mt-6">
                  <p className="font-medium text-gray-700">Select options for the statement period</p>
                  <div className="flex flex-col space-y-3 mt-3">
                    {["By Date", "By Month", "Last 6 Months", "FY (PPF Account)"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="filter"
                          value={option}
                          checked={filterType === option}
                          onChange={() => setFilterType(option)}
                          className="cursor-pointer"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>

                  {/* Date Picker Inputs */}
                  {filterType === "By Date" && (
                    <div className="mt-4">
                      <label className="block font-medium text-gray-600">Start Date</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="border rounded px-3 py-2 w-full mt-1 bg-blue-100 text-[#2F2C77]"
                        placeholderText="Select Start Date"
                      />
                      <label className="block font-medium text-gray-600 mt-3">End Date</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="border rounded px-3 py-2 w-full mt-1 bg-blue-100 text-[#2F2C77]"
                        placeholderText="Select End Date"
                      />
                    </div>
                  )}

                  <button
                    className="mt-6 px-4 py-2 bg-[#2F2C77] text-white font-semibold rounded transition hover:bg-blue-600"
                    onClick={() => setShowStatement(true)}
                    disabled={!selectedAccount}
                  >
                    Go
                  </button>
                </motion.div>
              ) : (
                <motion.div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">Transaction History</h3>
                  {/* Responsive Transaction Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-[#2F2C77] text-white">
                          <th className="p-2 border">Date</th>
                          <th className="p-2 border">Description</th>
                          <th className="p-2 border">Amount</th>
                          <th className="p-2 border">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((txn, index) => (
                          <tr key={index} className="border text-center">
                            <td className="p-2 border">{txn.date}</td>
                            <td className="p-2 border">{txn.description}</td>
                            <td className="p-2 border">{txn.amount}</td>
                            <td className="p-2 border">{txn.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Back Button */}
                  <button
                    className="mt-6 px-4 py-2 bg-[#2F2C77] text-white font-semibold rounded transition hover:bg-blue-600"
                    onClick={() => setShowStatement(false)}
                  >
                    Back
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountStatement;
