import { useState, useEffect, useRef } from "react";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { getNavLinks } from "../data/navLinks";
import { useTranslation } from "react-i18next";

function Navbar({ mode, onToggleTheme }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  const links = getNavLinks(lang);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const appBarRef = useRef(null);
  const isLight = theme.palette.mode === 'light';
  const navTextColor = scrolled || isLight ? 'text.primary' : 'common.white';

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
          backgroundColor: scrolled
            ? theme.palette.mode === 'light'
              ? 'rgba(255, 253, 247, 0.92)'
              : 'rgba(31, 36, 48, 0.86)'
            : isLight
              ? 'rgba(255, 253, 247, 0.62)'
              : 'transparent',
          boxShadow: scrolled ? 3 : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled || isLight ? `1px solid ${theme.palette.divider}` : '1px solid transparent',
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
                color: navTextColor,
                fontWeight: 800,
                letterSpacing: '.08rem',
                textShadow: !scrolled && !isLight ? '0 1px 2px rgba(0,0,0,0.35)' : 'none',
              }}
            >
              ARTURO CL
            </Typography>

            {/* Menú Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                {links.map((link) => (
                  <Button
                    key={link.id}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    sx={{
                      color: navTextColor,
                      borderRadius: 2,
                      fontWeight: 700,
                      letterSpacing: '0.015em',
                      '&:hover': {
                        backgroundColor: scrolled
                          ? theme.palette.action.hover
                          : 'rgba(255,255,255,0.16)',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}

                <IconButton
                  aria-label="toggle theme"
                  onClick={onToggleTheme}
                  sx={{
                    color: navTextColor,
                    border: '1px solid',
                    borderColor: scrolled ? 'divider' : 'rgba(255,255,255,0.35)',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: scrolled
                        ? theme.palette.action.hover
                        : 'rgba(255,255,255,0.14)',
                    },
                  }}
                >
                  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </Box>
            )}

            {/* Botón Menú Mobile */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  aria-label="toggle theme"
                  onClick={onToggleTheme}
                  sx={{
                    color: navTextColor,
                    border: '1px solid',
                    borderColor: scrolled ? 'divider' : 'rgba(255,255,255,0.35)',
                    borderRadius: 2,
                  }}
                >
                  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>

                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ color: navTextColor }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer para mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            height: '100%',
            backgroundColor: 'background.paper',
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {links.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(link.href)}
                  sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
                >
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
