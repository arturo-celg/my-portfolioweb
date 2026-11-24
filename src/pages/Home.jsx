import { Button, Container, Box, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";
//import animatedPhoto from '../assets/animatedPhoto.png';
import animatedPhoto from '../assets/animatedPhoto21.jpg';

function Home() {
  // Hook para detectar tamaño de pantalla
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLight = theme.palette.mode === 'light';
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const { t } = useTranslation();
  
  // 🎯 Radio responsivo para la órbita
  const orbitRadius = isMobile ? 110 : isTablet ? 140 : 160;
  // 🎯 Tamaño de iconos responsivo
  const iconSize = isMobile ? 35 : isTablet ? 42 : 50;

  const phrases = t('home.phrases', { returnObjects: true }) ?? [
    "Desarrollador Web Full Stack",
    "Experto en React y Node.js",
    "Especialista en DevOps y Cloud",
    "Creador de soluciones innovadoras"
  ];

  const selectedTechNames = [
    'dotnet',
    'server-admin',
    'sql',
    'scrum',
    'reporting', 
    'git',
    'security',
    'database-admin',
  ];

  const allTechItems = skills.technical.flatMap((category) => category.items);
  const techByName = new Map(allTechItems.map((item) => [item.name, item]));

  const techIcons = selectedTechNames
    .map((techName) => techByName.get(techName))
    .filter(Boolean)
    .map((item) => ({
      name: item.name,
      displayName: item.displayName,
      icon8Name: item.icon8Name,
      iconUrl: item.iconUrl,
    }));

  useEffect(() => {
    // Cambiar frase cada 3 segundos
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(phraseInterval);
    };
  }, []);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100vw',  // 🔧 Prevenir overflow
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isLight
          ? 'linear-gradient(135deg, rgba(248, 244, 236, 0.94), rgba(255, 253, 247, 0.98))'
          : 'linear-gradient(135deg, rgba(29, 33, 41, 0.96), rgba(22, 26, 34, 0.98))',
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
        padding: 0,
        margin: 0,
      }}
    >
      {/* Fondo animado */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          opacity: isLight ? 0.28 : 0.5,
        }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              background: isLight ? 'rgba(198, 40, 40, 0.12)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, maxWidth: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            py: { xs: 4, md: 8 },
            color: 'text.primary',
          }}
        >
          {/* Columna Izquierda - Texto */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 },
            }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 3,
                  letterSpacing: '0.02em',
                  textShadow: isLight ? 'none' : '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                {t('home.greeting')}{' '}
                <motion.span
                  style={{ color: theme.palette.lego.yellow }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                {t('home.name')}{' '}
                </motion.span>{' '}
                <motion.span
                  animate={{ 
                    rotate: [0, 14, -8, 14, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  style={{ display: 'inline-block' }}
                >
                  <WavingHandIcon   
                    sx={{ 
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                      verticalAlign: 'middle',
                      color: theme.palette.lego.yellow,
                    }} 
                  />
                </motion.span>
              </Typography>

              {/* Frase que cambia con transición */}
              <Box sx={{ minHeight: '80px', mb: 4 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhrase}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                        lineHeight: 1.6,
                        textShadow: isLight ? 'none' : '1px 1px 2px rgba(0,0,0,0.1)',
                        fontWeight: 500,
                        color: 'text.secondary',
                      }}
                    >
                      {phrases[currentPhrase]}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="#projects"
                  sx={{
                    borderRadius: 2.5,
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 600,
                    backgroundColor: 'primary.main',
                    border: '1px solid',
                    borderColor: 'primary.dark',
                    color: '#fff',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  {t('home.buttonProjects')}
                </Button>
              </motion.div>
            </motion.div>
          </Box>

          {/* Columna Derecha - Foto con tecnologías orbitando */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              order: { xs: 1, md: 2 },
              minHeight: { xs: '280px', sm: '320px', md: '400px' },
              maxWidth: '100%',  // 🔧 Prevenir overflow
            }}
          >
            {/* Contenedor de la foto */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 150, sm: 200, md: 250 },
                  height: { xs: 150, sm: 200, md: 250 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -3,
                    padding: 3,
                    background: isLight
                      ? `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
                      : `linear-gradient(45deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
                    borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                    animation: 'borderRotate 8s linear infinite',
                  },
                }}
              >
                <Avatar
                  src={animatedPhoto}
                  alt="Arturo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid',
                    borderColor: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.22)',
                    backgroundColor: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.1)',
                  }}
                />
              </Box>
            </motion.div>

            {/* Iconos de tecnologías orbitando - 🎯 RESPONSIVE */}
            {techIcons.map((tech, index) => {
              const totalIcons = techIcons.length;
              const angleOffset = (index / totalIcons) * 360;
              
              return (
                <motion.div
                  key={tech.name}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: -(iconSize / 2),  // 🔧 Centrado dinámico
                    marginTop: -(iconSize / 2),   // 🔧 Centrado dinámico
                  }}
                  animate={{
                    rotate: [angleOffset, angleOffset + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: orbitRadius,  // 🎯 Radio responsivo
                      top: 0,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [-angleOffset, -angleOffset - 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        width: iconSize,   // 🎯 Tamaño responsivo
                        height: iconSize,  // 🎯 Tamaño responsivo
                        background: isLight ? '#fffdf7' : 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '12px',
                        padding: '6px',
                        border: isLight ? '1px solid rgba(30, 36, 48, 0.16)' : 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src={`https://img.icons8.com/color/48/${tech.icon8Name}.png`}
                        alt={tech.displayName}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </motion.div>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;