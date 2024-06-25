import React, { useState } from 'react';
import { Box, styled, Typography, Link, Button, TextField, Grid } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url('me.jpg');
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 150px;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-bottom: 20px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://blog-backend-5n8l.onrender.com/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Feedback sent successfully');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </form>
  );
};

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to me on
          <Link href="https://www.instagram.com/divyansh20132/" color="inherit" target="_blank">
            <Instagram/>
          </Link>
          or send me an Email 
          <Link href="mailto:divyanshsrathore13@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
            <Email />
          </Link>.
        </Text>
        <Typography variant="h5">Leave a message:</Typography>
        <FeedbackForm />
      </Wrapper>
    </Box>
  );
}

export default Contact;
