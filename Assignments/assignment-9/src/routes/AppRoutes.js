import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Jobs from "../pages/Jobs";
import Contact from "../pages/Contact";
import CompanyShowcase from "../pages/CompanyShowcase";

const AppRoutes = () => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/companies" element={<CompanyShowcase />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
