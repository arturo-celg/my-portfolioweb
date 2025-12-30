import React, { useState, useEffect, useRef } from "react";
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
import { getNavLinks } from "../data/navLinks";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  const links = getNavLinks(lang);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const appBarRef = useRef(null);

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

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    if (!href || !href.startsWith('#')) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const offset = appBarRef.current?.clientHeight || 0; // altura real del AppBar según breakpoint
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        ref={appBarRef}
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
                {links.map((link) => (
                  <Button
                    key={link.id}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
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
            {links.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton onClick={() => handleNavClick(link.href)}>
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
