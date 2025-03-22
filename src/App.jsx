import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AccountSummary from "./pages/Account_summary";
import Profile from "./pages/Profile";
import AccountStatement from "./pages/Account_statement";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account_summary" element={<AccountSummary/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/account_statement" element={<AccountStatement/>} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
