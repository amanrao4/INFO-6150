import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Have questions or feedback? We'd love to hear from you.
      </Typography>
      <form>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
