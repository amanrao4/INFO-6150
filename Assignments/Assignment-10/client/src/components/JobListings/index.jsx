import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../store/actions/jobActions";
import './jobListings.css'
import Navbar from "../Navbar";

const JobListings = () => {
    const dispatch = useDispatch();

    // Access Redux state
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <>
         <Navbar/>
        <div className="job-listing-container">
            <h1 style={{color: 'white'}}>Job Listings</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && jobs.length > 0 ? (
                <ul className="jobs-list">
                    {jobs.map((job) => (
                        <li key={job._id} className="job-list-item">
                            <h3 className="job-title">{job.companyName} - {job.jobTitle}</h3>
                            <p className="job-description">{job.jobDescription}</p>
                            <p className="job-requirements"><strong>Requirements:</strong>{job.jobRequirements}</p>
                            <p className="job-salary"><strong>Salary:</strong>{job.jobSalary}</p>
                            <p className="job-lastUpdated"><strong>LastUpdated:</strong>{job.lastUpdated}</p>
                            <a href={job.linkToApply} className="apply-link">Apply Now</a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && !error && <p>No jobs available.</p>
            )}
        </div>
        </>
    );
};

export default JobListings;



