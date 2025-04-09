import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: '#1976d2',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.paper',
                  boxShadow: '0 4px 20px rgba(25, 118, 210, 0.1)',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#1976d2',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <EmailIcon fontSize="large" /> Contact Information
                </Typography>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#1976d2' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    tairjannatofficial360@gmail.com
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#1976d2' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  Army Welfare Trust Head Office (4th floor), Dhaka Cantonment
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#1976d2' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    +00880
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" sx={{ mb: 2, color: '#1976d2' }}>
                  Connect With Me
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    component="a"
                    href="https://www.linkedin.com/in/tairatul-jannat-tamima-4940491b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.2)' }
                    }}
                  >
                    <LinkedInIcon sx={{ color: '#1976d2' }} />
                  </IconButton>
                  <IconButton 
                    component="a"
                    href="https://github.com/TairatulJannat"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.2)' }
                    }}
                  >
                    <GitHubIcon sx={{ color: '#1976d2' }} />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.2)' }
                    }}
                  >
                    <TwitterIcon sx={{ color: '#1976d2' }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  boxShadow: '0 4px 20px rgba(25, 118, 210, 0.1)',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#1976d2',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <SendIcon fontSize="large" /> Send Me a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(25, 118, 210, 0.2)',
                          borderRadius: 1,
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#1976d2',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(25, 118, 210, 0.2)',
                          borderRadius: 1,
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#1976d2',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(25, 118, 210, 0.2)',
                          borderRadius: 1,
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#1976d2',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#1976d2',
                      color: 'white',
                      py: 1.5,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: '#1565c0',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 