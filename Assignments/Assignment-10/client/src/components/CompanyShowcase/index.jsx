import React, { useState, useEffect } from 'react';
import './companies.css';
import Navbar from "../Navbar";
import { getCompanies } from '../../api';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getCompanies();
                setCompanies(data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <>
        <Navbar />
        <div className="company-showcase-container">
            <h2 className="section-title">Company Showcase</h2>
            <div className="company-gallery">
                {companies.map((company) => (
                    <div key={company._id} className="company-item">
                        <img
                            src={`http://localhost:3001/company_images/${company.imagePath}`}
                            alt={company.name}
                            className="company-image"
                        />
                        <h3 className="company-name">
                            {company.name.charAt(0).toUpperCase() + company.name.slice(1).toLowerCase()}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default CompanyShowcase;
