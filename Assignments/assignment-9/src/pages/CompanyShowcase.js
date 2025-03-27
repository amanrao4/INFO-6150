import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

const companyNameMap = {
    "johndoe@example.com": "Microsoft",
    "janedoe@example.com": "Google",
    "test@example.com": "Meta",
}

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/user/getAll");
        const usersWithImages = response.data.users.filter((user) => user.image);
        setCompanies(usersWithImages);
      } catch (error) {
        console.error("Error fetching company images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>Loading companies...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Company Showcase
      </Typography>
      {companies.length === 0 ? (
        <Typography>No images uploaded yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`${process.env.REACT_APP_API_URL}${company.image}`}
                  alt={company.fullName}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {companyNameMap[company.email] || company.fullName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CompanyShowcase;
