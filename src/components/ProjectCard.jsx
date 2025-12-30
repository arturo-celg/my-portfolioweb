import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Chip
} from '@mui/material';
import { 
  GitHub, 
  Language,
  NavigateNext,
  NavigateBefore
} from '@mui/icons-material';

export default function ProjectCard({ 
  title, 
  description, 
  images, 
  image, // Soporte para la propiedad antigua
  technologies = [], // Valor por defecto vacío
  link, 
  github,
  category
}) {
  // Convertir la imagen antigua al nuevo formato si es necesario
  const imageList = images || (image ? [image] : ["/placeholder.jpg"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box sx={{ position: 'relative', height: 250 }}>
          {/* Etiqueta de categoría */}
          {category && (
            <Chip
              label={
                category === 'personal' ? 'Personal' :
                category === 'academico' ? 'Académico' :
                category === 'laboral' ? 'Laboral' : category
              }
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                zIndex: 2,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: 'white',
                '& .MuiChip-label': { fontWeight: 600 }
              }}
            />
          )}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={imageList[currentImageIndex]}
              alt={`${title} - imagen ${currentImageIndex + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
              }}
            />
          </AnimatePresence>

          {/* Controles del carrusel */}
          {imageList.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
                '&:hover': {
                  opacity: 1,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                },
              }}
            >
              <IconButton 
                onClick={prevImage}
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.4)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
                  ml: 1
                }}
              >
                <NavigateBefore />
              </IconButton>
              <IconButton 
                onClick={nextImage}
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.4)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
                  mr: 1
                }}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          )}

          {/* Indicadores */}
          {imageList.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {imageList.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: index === currentImageIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </Box>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(45deg, #6366F1 30%, #9333EA 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {description}
          </Typography>

          {/* Tecnologías */}
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Chip
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(99, 102, 241, 0.2)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mt: 2,
            justifyContent: 'flex-start' 
          }}>
            {link && (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<Language />}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </motion.div>
            )}
            
            {github && (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHub />}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </Button>
              </motion.div>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
