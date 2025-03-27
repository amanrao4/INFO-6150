import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../api/axiosInstance";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", formData);
      login(res.data.token);
      navigate("/home");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
