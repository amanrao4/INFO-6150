import React from 'react';
import { Container, Typography, Box, Card, Grid, CardContent } from '@mui/material';
import Navbar from "../Navbar";

function About() {
    const cardStyle = {
        backgroundColor: 'black',
        color: 'white',
        transition: 'transform 0.3s',
        '&:hover': { transform: 'translateY(-5px)', backgroundColor: '#333' }
    };

    const textColor = {
        color: 'white'
    };

    return (
        <>
        <Navbar />
        <Container sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', py: 4 }}>
            <Box textAlign="center" mt={4}>
                <Typography variant="h2" gutterBottom sx={textColor}>About Us</Typography>
                <Typography variant="h6" color="textSecondary" paragraph sx={{ color: '#b0b0b0' }}>
                    We are a passionate team committed to creating exceptional digital experiences.
                    Our goal is to empower individuals and businesses by offering solutions that simplify their daily operations.
                </Typography>
            </Box>
            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom sx={textColor}>Our Story</Typography>
                <Typography variant="body1" color="textSecondary" paragraph sx={{ color: '#b0b0b0' }}>
                    Founded with the vision of providing innovative solutions, we are driven by a desire to make technology more accessible and user-friendly.
                    Over the years, our team has worked with clients across multiple industries, helping them streamline processes and achieve their goals.
                </Typography>
            </Box>
            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom sx={textColor}>Our Mission and Vision</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Our Mission</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ color: '#b0b0b0' }}>
                                    To leverage cutting-edge technology and design to create solutions that make a lasting impact, empowering our users to succeed in
                                    a fast-evolving digital world.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Our Vision</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ color: '#b0b0b0' }}>
                                    To be recognized as a global leader in providing intuitive and powerful solutions that drive innovation and positive change in the digital space.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom sx={textColor}>Our Values</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Innovation</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ color: '#b0b0b0' }}>
                                    We believe in constant innovation, always striving to push the boundaries of what is possible to create the best solutions for our clients.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Integrity</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ color: '#b0b0b0' }}>
                                    We uphold the highest standards of integrity, ensuring that our work is ethical, transparent, and aligned with our core principles.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card sx={cardStyle}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Customer-Centric</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ color: '#b0b0b0' }}>
                                    Our focus is always on the needs and success of our customers. We listen closely and provide tailored solutions that drive measurable results.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    );
}

export default About;
