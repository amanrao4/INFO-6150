import React, { useEffect } from "react";
import "./Employees.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../store/actions/employeesActions";
import Navbar from "../Navbar";

const EmployeesPage = () => {
    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector((state) => state.employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="admin-container">
                <h1 style={{color: 'white'}}>Employees</h1>
                {loading && <p className="loading-message">Loading...</p>}
                {error && <div className="error-message">{error}</div>}

                {!error && employees.length > 0 ? (
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.email}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    !error && <p className="no-users-message">No users found.</p>
                )}
            </div>
        </>
    );
};

export default EmployeesPage;
