import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Job Portal</Typography>

        {token && (
          <Box>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/companies">Companies</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
