import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Skills', path: '/skills' },
    { text: 'Resume', path: '/resume' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ width: 250, pt: 2 }}>
      {menuItems.map((item) => (
        <ListItem
          button
          component={RouterLink}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <ListItemText 
            primary={item.text} 
            sx={{
              '& .MuiTypography-root': {
                fontWeight: 500,
                color: theme.palette.primary.main,
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          background: 'rgb(218, 236, 251)',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: 0.5,
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              Tairatul JannatTamima
            </Typography>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1, backgroundColor: 'none' }}>
              
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color="primary"
                    sx={{
                      mx: 0.5,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 500,
                      position: 'relative',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: 'rgba(240, 248, 255, 0.95)',
            borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 