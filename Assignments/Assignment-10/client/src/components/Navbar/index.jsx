import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/userActions";
import {Logout} from "../Logout";

function Navbar() {
    const dispatch = useDispatch();
    const { userType, isAuthenticated, userName } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({ type: "GET_USER", payload: {} });
    }, [dispatch]);

    const activeStyle = { backgroundColor: "white", color: "#333", fontWeight: "bold", borderRadius: "4px" };
    const defaultStyle = { color: "#fff", fontWeight: "bold" };

    return (
        <AppBar position="static" sx={{ backgroundColor: "maroon", padding: "0.5rem 1rem" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {userName && userName !== "" ? `User: ${userName}` : "Career Connect"}
                </Typography>
                {isAuthenticated ? (
                    <>
                        {userType === "admin" ? (
                            <>
                                <NavLink to="/admin/employees" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Employees</Button>
                                </NavLink>
                                <NavLink to="/admin/addjob" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Add Job</Button>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Home</Button>
                                </NavLink>
                                <NavLink to="/jobs" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Jobs</Button>
                                </NavLink>
                                <NavLink to="/companies" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Companies</Button>
                                </NavLink>
                                <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">About</Button>
                                </NavLink>
                                <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                    <Button color="inherit">Contact</Button>
                                </NavLink>
                            </>
                        )}

                        <Button
                            color="inherit"
                            onClick={() => {
                                Logout();
                                dispatch(logoutUser());
                            }}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                            <Button color="inherit">Login</Button>
                        </NavLink>
                        <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                            <Button color="inherit">Register</Button>
                        </NavLink>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
