import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'Next.js', level: 60 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Bootstrap', level: 75 },

    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Laravel', level: 85 },
      { name: 'Python', level: 50 },
      { name: 'MySQL', level: 85 },
      { name: 'PhP', level: 80 },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Linux', level: 50 },
      { name: 'figma', level: 60 },
      { name: 'Microsoft Office', level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 3, color: 'primary.main' }}
                    >
                      {category.category}
                    </Typography>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'primary.light',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 