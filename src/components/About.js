import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const About = () => {
  const experiences = [
    {
      title: 'Executive Software Engineer',
      company: 'Trust Innovation Ltd(Army Welfare Trust)',
      period: 'Dec 2022 - Present',
      description:
        'Led full-stack development of scalable web applications, optimizing performance and user experience.',
      icon: <WorkIcon />,
    },
    {
      title: 'Software Engineer',
      company: ' Kamrul Group (KG)',
      period: 'Sep 2022 - Nov 2022',
      description:
        'Implemented backend logic, responsive frontend design, robust database architecture, API integration, and version control using GitHub and GitLab, while actively researching new technologies.',
      icon: <WorkIcon />,
    },
    {
      title: 'Web Developer',
      company: 'Geeksntechnology Ltd.',
      period: 'Aug 2021 - Aug 2022',
      description:
        'Implemented backend logic, responsive frontend design, robust database architecture, API integration, and version control using GitHub and GitLab, while actively researching new technologies.',
      icon: <WorkIcon />,
    },
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'East West University',
      description: 'Graduated with Bsc, specialized in Software Engineering.',
      icon: <SchoolIcon />,
    },
    {
      title: ' Higher Secondary School Certificate(HSC)',
      company: 'Feni Govt. Collage',
      description: 'Graduated with Science',
      icon: <SchoolIcon />,
    },
  ];

  const skills = [
    { name: 'JavaScript', icon: <CodeIcon /> },
    { name: 'React', icon: <LanguageIcon /> },
    { name: 'Node.js', icon: <CodeIcon /> },
    { name: 'Laravel', icon: <CodeIcon /> },
    { name: 'MySQL', icon: <StorageIcon /> },
    { name: 'Git', icon: <BuildIcon /> },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
       
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
              fontWeight: 700,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            {/* Profile Section */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Avatar
                    src="/images/propic.jpg"
                    alt="Profile"
                    sx={{
                      width: 150,
                      height: 150,
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    Tamima
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                    }}
                  >
                    Executive Software Engineer
                  </Typography>
                  <Divider sx={{ width: '100%', mb: 3 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      textAlign: 'center',
                      color: 'text.primary',
                    }}
                  >
                    Passionate software engineer with expertise in full-stack development,
                    creating elegant solutions to complex problems.
                  </Typography>
                  <Box sx={{ mt: 'auto', width: '100%' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      Skills
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      {skills.map((skill, index) => (
                        <Chip
                          key={index}
                          icon={skill.icon}
                          label={skill.name}
                          sx={{
                            bgcolor: 'rgba(0,0,0,0.05)',
                            color: 'primary.main',
                            border: '1px solid',
                            borderColor: 'primary.main',
                            '&:hover': {
                              bgcolor: 'primary.main',
                              color: 'white',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
              
              {/* Thesis Card - Now directly below profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    mt: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Thesis
                  </Typography>
                  
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 1,
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  >
                    Suicide Prediction Using Machine Learning
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <CodeIcon sx={{ fontSize: 16, mr: 0.5 }} /> Python, Numpy, Pandas
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                    }}
                  >
                     A machine learning approach to detect suicide prediction from a random collecteddataset using Neural Network, Naive Bayes, Random Forest, Logistic Regression, SVM, Decision Tree.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Experience & Education Section */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Experience Section */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Experience
                  </Typography>
                  <Timeline>
                    {experiences.filter(exp => exp.icon.type === WorkIcon).map((exp, index, filteredArray) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              boxShadow: '0 0 0 4px rgba(0,0,0,0.05)',
                            }}
                          >
                            {exp.icon}
                          </TimelineDot>
                          {index < filteredArray.length - 1 && (
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                          )}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              bgcolor: 'rgba(0,0,0,0.02)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(5px)',
                                bgcolor: 'rgba(0,0,0,0.04)',
                              },
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: 'text.secondary',
                                mb: 1,
                              }}
                            >
                              {exp.company} | {exp.period}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                              {exp.description}
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>

                {/* Education Section */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Education
                  </Typography>
                  <Timeline>
                    {experiences.filter(exp => exp.icon.type === SchoolIcon).map((exp, index, filteredArray) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              boxShadow: '0 0 0 4px rgba(0,0,0,0.05)',
                            }}
                          >
                            {exp.icon}
                          </TimelineDot>
                          {index < filteredArray.length - 1 && (
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                          )}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              bgcolor: 'rgba(0,0,0,0.02)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(5px)',
                                bgcolor: 'rgba(0,0,0,0.04)',
                              },
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: 'text.secondary',
                                mb: 1,
                              }}
                            >
                              {exp.company} | {exp.period}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                              {exp.description}
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 