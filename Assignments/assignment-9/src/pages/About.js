import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        This job portal was built as part of a full-stack development project using Node.js, Express,
        MongoDB, and React. It allows job seekers to find opportunities, explore companies, and securely log in to interact with the portal.
      </Typography>
      <Typography variant="body1" paragraph>
        In future iterations, we'll enhance functionality to include user-specific image uploads, job applications, and administrative dashboards.
      </Typography>
      <Typography variant="body1">
        Built with by Aman Rao of Northeastern University as part of INFO-6150.
      </Typography>
    </Box>
  );
};

export default About;
