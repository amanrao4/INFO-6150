import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import jobPortalImage from './job_portal.png';
import Navbar from "../Navbar";

const HomePage = () => {

    const buttonStyle = {
        mt: 2,
        color: 'white',
        backgroundColor: 'maroon',
        borderColor: 'maroon',
        '&:hover': { backgroundColor: 'red', color: 'white' },
    };

    return (
       <>
       <Navbar />
       <Container sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', py: 4 }}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={4}>
                <Box flex={1}>
                    <Typography variant="h2" gutterBottom color="white">Welcome to Career Connect</Typography>
                    <Typography variant="h6" color="white" paragraph>
                        Find your ideal role or introduce your organization to exceptional talent. Our platform bridges the gap between job seekers and employers with ease.
                    </Typography>
                    <Button
                        variant="outlined"
                        component={Link}
                        to="/jobs"
                        sx={buttonStyle}
                    >
                        Discover Jobs
                    </Button>
                </Box>
                <Box flex={1} display="flex" justifyContent="center">
                    <img src={jobPortalImage} alt="job portal illustration" style={{ width: '100%', maxWidth: '400px' }} />
                </Box>
            </Box>

            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom color="white">Our Services</Typography>
                <Grid container spacing={4} mt={2}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Find a Job
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Access a diverse range of job openings across various fields and apply to those that align with your skills.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/jobs"
                                    sx={buttonStyle}
                                >
                                    Browse Jobs
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Employer Profiles
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Discover leading companies and find an environment where you can thrive professionally.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/companies"
                                    sx={buttonStyle}
                                >
                                    View Companies
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Support & Contact
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Need help? Reach out to us for assistance with your job search or platform navigation.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/contact"
                                    sx={buttonStyle}
                                >
                                    Reach Out
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
       </>
    );
}

export default HomePage;
