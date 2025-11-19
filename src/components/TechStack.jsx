import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function TechStack({ skills }) {
  const getIconUrl = (tech, color) => {
    const techLower = tech.toLowerCase().replace(/\s+/g, '');
    const formattedColor = color ? color.replace('#', '') : '';
    return `https://cdn.simpleicons.org/${techLower}/${formattedColor}`;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& img': {
                  filter: 'grayscale(0%)',
                  opacity: 1
                }
              }
            }}
          >
            <Box
              component="img"
              src={getIconUrl(skill.name, skill.color)}
              alt={skill.displayName}
              sx={{
                width: 25,
                height: 25,
                transition: 'all 0.3s ease',
                filter: 'grayscale(100%)',
                opacity: 0.7
              }}
            />
            <Typography sx={{ flex: 1, fontSize: '0.9rem' }}>
              {skill.displayName}
            </Typography>
            <Typography sx={{ opacity: 0.7, fontSize: '0.8rem' }}>
              {skill.level}%
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}