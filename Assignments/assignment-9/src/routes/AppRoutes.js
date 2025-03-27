import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Jobs from "../pages/Jobs";
import Contact from "../pages/Contact";
import CompanyShowcase from "../pages/CompanyShowcase";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      {/* Login Page */}
      <Route
        path="/"
        element={!token ? <Login /> : <Navigate to="/home" />}
      />

      {/* Protected Pages */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/jobs"
        element={
          <PrivateRoute>
            <Jobs />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/companies"
        element={
          <PrivateRoute>
            <CompanyShowcase />
          </PrivateRoute>
        }
      />

      {/* Catch-All: Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
