import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Job Portal
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Discover exciting job opportunities and explore leading companies hiring talent like you.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/jobs"
        sx={{ mr: 2 }}
      >
        View Jobs
      </Button>
      <Button variant="outlined" component={Link} to="/companies">
        Browse Companies
      </Button>
    </Box>
  );
};

export default Home;
