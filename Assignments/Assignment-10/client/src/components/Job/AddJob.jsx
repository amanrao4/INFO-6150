import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Navbar from "../Navbar";
import { createJob } from "../../api";
import "./AddJob.css";

const AddJob = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
        requirements: "",
        applyLink: "",
    });

    const [feedbackErr, setFeedbackErr] = useState("");
    const [feedbackSuccess, setFeedbackSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedbackErr("");
        setFeedbackSuccess("");

        try {
            const response = await createJob(
                formData.companyName,
                formData.jobTitle,
                formData.description,
                formData.salary,
                formData.requirements,
                formData.applyLink
            );

            if (response.success) {
                setFeedbackErr("");
                setFeedbackSuccess("Job added successfully!");
                setFormData({
                    companyName: "",
                    jobTitle: "",
                    description: "",
                    salary: "",
                    requirements: "",
                    applyLink: "",
                });
            } else {
                setFeedbackSuccess("");
                setFeedbackErr(response.message || "Failed to add job.");
            }
        } catch (error) {
            setFeedbackSuccess("");
            setFeedbackErr("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="add-job-container">
                <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h5" gutterBottom color="white">
                        Add a New Job
                    </Typography>

                    <TextField
                        label="Company Name"
                        name="companyName"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <TextField
                        label="Job Title"
                        name="jobTitle"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <TextField
                        label="Salary"
                        name="salary"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={formData.salary}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <TextField
                        label="Requirements"
                        name="requirements"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={3}
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <TextField
                        label="Apply Link"
                        name="applyLink"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={formData.applyLink}
                        onChange={handleChange}
                        required
                        sx={{
                            input: { color: "black" },
                            label: { color: "white" },
                            backgroundColor: "#444",
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{
                            backgroundColor: "#800000",
                            color: "white",
                            "&:hover": { backgroundColor: "#b30000" },
                            mt: 2,
                        }}
                    >
                        Add Job
                    </Button>

                    {feedbackSuccess && (
                        <Typography
                            variant="body1"
                            color="green"
                            mt={2}
                            className="feedbackSuccess"
                        >
                            {feedbackSuccess}
                        </Typography>
                    )}
                    {feedbackErr && (
                        <Typography
                            variant="body1"
                            color="error"
                            mt={2}
                            className="feedbackErr"
                        >
                            {feedbackErr}
                        </Typography>
                    )}
                </Box>
            </div>
        </>
    );
};

export default AddJob;
