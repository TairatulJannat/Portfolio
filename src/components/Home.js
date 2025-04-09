import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',      
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.2,
                }}
              >
                Hi, I'm Tairatul Jannat Tamima
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  maxWidth: '600px',
                  lineHeight: 1.8,
                }}
              >
                Transforming ideas into elegant digital solutions through innovative web development. 
                Specializing in building scalable, high-performance applications with cutting-edge technologies 
                that deliver exceptional user experiences and drive business growth.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                >
                  View My Work
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                component="img"
                src="https://tairatuljannat.github.io/portfolio/images/profile_picture.jpg"
                alt="Tairatul Jannat Tamima"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 