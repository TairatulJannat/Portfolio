import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Description of your role and achievements',
  },
  {
    title: 'Junior Developer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Description of your role and achievements',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2016 - 2020',
    description: 'Relevant coursework and achievements',
  },
];

const Resume = () => {
  const skills = {
    'Programming Languages': [
      'JavaScript',
      'Python',
      'Java',
      'TypeScript',
      'HTML/CSS',
    ],
    'Frontend Technologies': [
      'React.js',
      'Redux',
      'Material-UI',
      'Bootstrap',
      'jQuery',
    ],
    'Backend Technologies': [
      'Node.js',
      'Express.js',
      'Django',
      'Spring Boot',
      'RESTful APIs',
    ],
    'Databases': [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Firebase',
    ],
    'Tools & Technologies': [
      'Git',
      'Docker',
      'AWS',
      'CI/CD',
      'Jest',
      'Webpack',
    ],
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
              color: 'primary.main',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Resume
          </Typography>
          
          {/* CV Picture Section */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                maxWidth: '600px',
                margin: '0 auto',
                bgcolor: 'background.paper',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              >
                CV
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '600px',
                  mb: 2,
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="/files/Tamima_CV.pdf"
                  width="100%"
                  height="100%"
                  title="CV Preview"
                  style={{ border: 'none' }}
                />
              </Box>
              <Button
                variant="contained"
                startIcon={<PictureAsPdfIcon />}
                href="/files/Tamima_CV.pdf"
                download="Tamima_CV.pdf"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Download CV
              </Button>
            </Paper>
          </Box>
          
         
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume; 