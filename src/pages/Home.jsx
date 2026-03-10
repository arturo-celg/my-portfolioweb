import { Button, Container, Box, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';  
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";
import animatedPhoto from '../assets/animatedPhoto.png';

function Home() {
  // Hook para detectar tamaño de pantalla
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
    'csharp',
    'server-admin',
    'sql',
    'python',
    'reporting', 
    'javascript',
    'react',
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
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    // Cambiar frase cada 3 segundos
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
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
        background: 'linear-gradient(45deg, #6366F1, #9333EA)',
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
          opacity: 0.6,
        }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              background: 'rgba(255, 255, 255, 0.1)',
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
            color: 'white',
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
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                {t('home.greeting')}{' '}
                <motion.span
                  style={{ color: '#FDE68A' }}
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
                      color: '#FDE68A',
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
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                        fontWeight: 500,
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
                    borderRadius: '9999px',
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                    background: 'linear-gradient(45deg, #FDE68A, #93C5FD)',
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
                    border: '4px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
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
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '12px',
                        padding: '6px',
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