import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "../data/navLinks";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Efecto para el cambio de color en scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo/Título */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: scrolled ? 'text.primary' : 'white',
                fontWeight: 700,
                letterSpacing: '.1rem',
              }}
            >
              ARTURO.DEV
            </Typography>

            {/* Menú Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.id}
                    href={link.href}
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      '&:hover': {
                        backgroundColor: scrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Botón Menú Mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: scrolled ? 'text.primary' : 'white' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer para mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton component="a" href={link.path}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
