import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Trust Green City',
    description: 'Developed a responsive website for a Bangladesh Army residential project, showcasingproperty details, project info, and admin management features',
    image: 'https://tairatuljannat.github.io/portfolio/images/trustgreencity.jpg',
    technologies: ['Next.js (Frontend)', 'Laravel (Backend)', 'MySQL'],
    link: 'http://120.89.64.66:3000/',
  },
  {
    title: 'Inspectorate of Electronics Instruments(Office Automation) ',
    description: 'It primarily manages the tracking of files among individuals with various designations. Additionally, the system facilitates the task of uploading files in both Excel and CSR formats. These files can be reviewed and approved through an individual administrative panel',
    image: 'https://tairatuljannat.github.io/portfolio/images/IE&I.jpg',
    technologies: ['Laravel', 'MySQL', 'Javascript','Bootstrap5','Ajax'],
    link: 'https://ieandi.tilbd.net/',
  },
  {
    title: 'Jolshiri Central Park',
    description: 'Jolshiri Central Park is a popular tourist attraction, and an online ticket system can make it easier for visitors to purchase tickets and plan their visit in advance.',
    image: 'https://tairatuljannat.github.io/portfolio/images/jolshiri.jpg',
    technologies: ['Laravel', 'MySQL', 'API','Bootstrap5','Jquery','Ajax'],
    link: 'https://jolshiricentralpark.com/',
  },
  {
    title: 'HELLO SUPERSTARS',
    description: 'This is a social media platform. It is created for web and mobile application.We Also build App for iOS AND android.',
    image: 'https://tairatuljannat.github.io/portfolio/images/hellosuperstar.jpg',
    technologies: ['ReactJS', 'Laravel', 'React Native,','MySQL','Bootstrap5','Ajax'],
    link: 'https://www.hellosuperstars.com/login',
  },
  {
    title: 'THE VOICE24',
    description: 'This is a dynamic newsPortal website which contains online news on different issues and readers oftentimes contribute their own opinions.',
    image: 'https://tairatuljannat.github.io/portfolio/images/voice24.jpg',
    technologies: ['ReactJS', 'Laravel', 'React Native,','MySQL','Bootstrap5','Ajax'],
    link: 'https://thevoice24.com/',
  },
  {
    title: 'SSPPOS',
    description: '  This is a point of sale project',
    image: 'https://tairatuljannat.github.io/portfolio/images/ssppos.jpg',
    technologies: ['ReactJS', 'Laravel8', 'React Native,','MySQL','Bootstrap5','Ajax'],
    link: 'https://ssppos-new.smartphone-depot.com/login',
  },
];

const Projects = () => {
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
              color: 'primary.main',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            My Projects
          </Typography>
          <Grid container spacing={3} sx={{ 
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '600px',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      },
                      position: 'relative',
                      overflow: 'auto',
                      borderRadius: '16px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="120"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                        objectFit: 'cover',
                        width: '100%',
                        height: '250px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      p: { xs: 2, sm: 3 },
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,1))',
                      height: '480px',
                      justifyContent: 'space-between',
                      overflow: 'auto',
                    }}>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            lineHeight: 1.2,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 2,
                            color: 'primary.main',
                            fontSize: { xs: '0.875rem', md: '1rem' },
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <Typography
                              key={techIndex}
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                bgcolor: 'rgba(0,0,0,0.05)',
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                                border: '1px solid rgba(0,0,0,0.1)',
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                      <Button
                        variant="outlined"
                        href={project.link}
                        target="_blank"
                        sx={{
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.light',
                            bgcolor: 'rgba(0,0,0,0.05)',
                          },
                          alignSelf: 'flex-start',
                        }}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 