import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Card, CardContent, Typography, Chip, Link } from "@mui/material";
import { motion } from "framer-motion";
import { aboutInfo } from "../data/about";
import { skills } from "../data/skills";
import { experience } from "../data/experience";
import AboutCard from "../components/AboutCard";
import TechStack from "../components/TechStack";
import SimpleCarousel from "../components/SimpleCarousel";

export default function About() {
  const [info, setInfo] = useState(null);
  

  useEffect(() => {
    setInfo(aboutInfo);
  }, []);

  // Hooks must be called in the same order on every render.
  // (Refs removidos del carrusel personalizado anterior)

  useEffect(() => {}, [info]);

  if (!info) return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography>Cargando...</Typography>
    </Box>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const scrollHorizontal = () => {};

  const certItems = (skills.certifications || []);
  
  return (
    <Box component="section" id="about" sx={{ py: 4, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Opciones: 'xl' reduce márgenes laterales; usar maxWidth={false} hace full-width */}
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3 }, maxWidth: '100%' }}>
        {/* aumentar el ancho del contenido para reducir bandas negras */}
        <Box sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
          <Grid container spacing={2.5} alignItems="flex-start" alignContent="flex-start" justifyContent="center">
             {/* Foto y Información Personal */}
            {/* columna izquierda: solo descripción (sin imagen) - ajustar ancho */}
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start' }}>
               <motion.div variants={itemVariants} style={{ width: '100%' }}>
                 <Card
                   elevation={3}
                   component={motion.div}
                   whileHover={{ scale: 1.01 }}
                   transition={{ duration: 0.3 }}
                   sx={{ 
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column'
                   }}
                 >
                   <CardContent 
                     sx={{ 
                       p: { xs: 2, sm: 3 },
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center'
                     }}
                   >
                    {/* Solo descripcion: quitar imagen y avatar, dejar título + descripción */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mb: 1, maxWidth: 800 }}>
                      <Typography variant="h5" sx={{ mb: 0.75, fontWeight: "bold" }}>Arturo</Typography>
                      <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Desarrollador Full Stack</Typography>
                      <Box sx={{ mt: 1, width: '100%' }}>
                        <AboutCard {...info} />
                      </Box>
                    </Box>
                   </CardContent>
                 </Card>
               </motion.div>
             </Grid>
            {/* Experiencia y Educación - ahora ocupa todo el ancho */}
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <motion.div variants={itemVariants} style={{ width: '100%' }}>
                <Card
                  elevation={3}
                  component={motion.div}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  sx={{ 
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: { xs: 2, sm: 3 },
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      minWidth: 0
                    }}
                  >
                    {/* Grid para dos columnas en desktop */}
                    <Grid container spacing={3}>
                      {/* Columna Experiencia */}
                      <Grid item xs={12} md={6}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            mb: 3,
                            fontWeight: "bold", 
                            color: "primary.main",
                            borderBottom: '2px solid',
                            borderColor: 'primary.main',
                            pb: 1,
                            textAlign: 'center'
                          }}
                        >
                          Experiencia Laboral
                        </Typography>
                        {experience.work.map((job, index) => (
                          <Box key={index} sx={{ mb: 2.5 }}>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>
                              {job.title}
                            </Typography>
                            <Typography variant="subtitle1" color="primary" sx={{ mb: 0.5 }}>
                              {job.company}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                              {job.period}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, mb: 1 }}>
                              {job.description.map((item, i) => (
                                <Typography component="li" key={i} sx={{ mb: 0.5 }}>
                                  {item}
                                </Typography>
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {job.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Grid>

                      {/* Columna Educación */}
                      <Grid item xs={12} md={6}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            mb: 3, 
                            fontWeight: "bold", 
                            color: "primary.main",
                            borderBottom: '2px solid',
                            borderColor: 'primary.main',
                            pb: 1,
                            textAlign: 'center'
                          }}
                        >
                          Educación
                        </Typography>
                        {experience.education.map((edu, index) => (
                          <Box key={index} sx={{ mb: 2.5 }}>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>
                              {edu.degree}
                            </Typography>
                            <Typography variant="subtitle1" color="primary" sx={{ mb: 0.5 }}>
                              {edu.institution}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                              {edu.period}
                            </Typography>
                            <Typography variant="body2">
                              {edu.description}
                            </Typography>
                          </Box>
                        ))}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

             {/* Habilidades Técnicas */}
             <Grid item xs={12} sx={{ display: 'flex', minWidth: 0 }}>
               <motion.div variants={itemVariants} style={{ width: '100%', minWidth: 0 }}>
                 <Card
                   elevation={3}
                   component={motion.div}
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 0.3 }}
                   sx={{
                     width: '100%',
                     maxWidth: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: 0
                   }}
                 >
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 3 },
                    width: '100%',
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0
                  }}>
                     <Typography 
                       variant="h5" 
                       sx={{ 
                         mb: 3,
                         fontWeight: "bold",
                         textAlign: "center",
                         borderBottom: '2px solid',
                         borderColor: 'primary.main',
                         pb: 1
                       }}
                     >
                       Habilidades Técnicas
                     </Typography>
                     <Grid container spacing={3} alignItems="stretch" alignContent="stretch">
                       {skills.technical.map((category, index) => (
                         <Grid item xs={12} md={4} key={category.category} sx={{ display: 'flex' }}>
                           <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: index * 0.2 }}
                             viewport={{ once: true }}
                             style={{ height: '100%', width: '100%' }}
                           >
                             <Card 
                               variant="outlined" 
                               sx={{
                                 height: '100%',
                                 width: '100%',
                                 display: 'flex',
                                 flexDirection: 'column',
                                 flex: 1,
                                 backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                 backdropFilter: 'blur(10px)',
                                 transition: 'transform 0.3s ease-in-out',
                                 '&:hover': {
                                   transform: 'translateY(-5px)',
                                 }
                               }}
                             >
                               <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                 <Typography 
                                   variant="h6" 
                                   color="primary" 
                                   textAlign="center"
                                   sx={{
                                     pb: 1,
                                     borderBottom: '2px solid',
                                     borderColor: 'primary.main',
                                     mb: 2
                                   }}
                                 >
                                   {category.category}
                                 </Typography>
                                 <Box sx={{ 
                                   display: 'flex', 
                                   flexDirection: 'column', 
                                   gap: 2,
                                   flex: 1,
                                   width: '100%'
                                 }}>
                                   {category.items.map((skill, skillIndex) => (
                                     <motion.div
                                       key={skill.name}
                                       initial={{ opacity: 0, x: -20 }}
                                       whileInView={{ opacity: 1, x: 0 }}
                                       transition={{ delay: skillIndex * 0.1 }}
                                       viewport={{ once: true }}
                                       style={{ width: '100%' }}
                                     >
                                       <Box sx={{ width: '100%' }}>
                                         <Box sx={{ 
                                           display: 'flex', 
                                           alignItems: 'center', 
                                           gap: 1,
                                           mb: 1,
                                           minHeight: 32,
                                           width: '100%'
                                         }}>
                                           <Box
                                             component="img"
                                             src={`https://cdn.simpleicons.org/${skill.name}/${skill.color}`}
                                             alt={skill.displayName}
                                             sx={{
                                               width: 20,
                                               height: 20,
                                               mr: 1.5
                                             }}
                                           />
                                           <Typography variant="body2">{skill.displayName}</Typography>
                                         </Box>
                                        
                                       </Box>
                                     </motion.div>
                                   ))}
                                 </Box>
                               </CardContent>
                             </Card>
                           </motion.div>
                         </Grid>
                       ))}
                     </Grid>
                   </CardContent>
                 </Card>
               </motion.div>
             </Grid>

             {/* Certificaciones (carrusel) */}
             <Grid item xs={12} sx={{ display: 'flex', minWidth: 0 }}>
               <motion.div variants={itemVariants} style={{ width: '100%', minWidth: 0 }}>
                 <Card
                   elevation={3}
                   component={motion.div}
                   whileHover={{ scale: 1.01 }}
                   transition={{ duration: 0.3 }}
                   sx={{
                     width: '100%',
                     maxWidth: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: 0,
                     overflow: 'hidden'
                   }}
                 >
                   <CardContent sx={{ 
                     p: { xs: 2, sm: 3 },
                     width: '100%',
                     maxWidth: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: 0,
                     overflow: 'hidden'
                   }}>
                     <Typography 
                       variant="h5" 
                       sx={{ 
                         mb: 3,
                         fontWeight: "bold",
                         textAlign: "center",
                         borderBottom: '2px solid',
                         borderColor: 'primary.main',
                         pb: 1
                       }}
                     >
                       Certificaciones
                     </Typography>
                    {/* Carrusel certificaciones con botones (overlay) */}
                    <Box sx={{ width: '100%', maxWidth: '100%', minWidth: 0, mb: 3 }}>
                      <SimpleCarousel
                        items={certItems}
                        ariaLabel="carrusel certificaciones"
                        renderItem={(cert) => (
                          <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>{cert.name}</Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{cert.issuer}</Typography>
                              <Typography variant="caption" color="text.secondary">{cert.date}</Typography>
                              <Box sx={{ mt: 1 }}>
                                <Link href={cert.link} target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>Ver certificado</Link>
                              </Box>
                            </CardContent>
                          </Card>
                        )}
                        getKey={(c, i) => c.name + i}
                      />
                    </Box>

                     {/* Carrusel cursos (separado) */}
                     <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Cursos</Typography>
                    <Box sx={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
                      <SimpleCarousel
                        items={(skills.courses) || []}
                        ariaLabel="carrusel cursos"
                        renderItem={(course) => (
                          <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>{course.name}</Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{course.provider}</Typography>
                              <Typography variant="caption" color="text.secondary">{course.date}</Typography>
                              {course.link && (
                                <Box sx={{ mt: 1 }}>
                                  <Link href={course.link} target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>Ver curso</Link>
                                </Box>
                              )}
                            </CardContent>
                          </Card>
                        )}
                        getKey={(c, i) => c.name + i}
                      />
                    </Box>
                   </CardContent>
                 </Card>
               </motion.div>
             </Grid>

             {/* Soft Skills */}
             <Grid item xs={12} sx={{ display: 'flex', minWidth: 0 }}>
               <motion.div variants={itemVariants} style={{ width: '100%', minWidth: 0 }}>
                 <Card
                   elevation={3}
                   component={motion.div}
                   whileHover={{ scale: 1.01 }}
                   transition={{ duration: 0.3 }}
                   sx={{
                     width: '100%',
                     maxWidth: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: 0
                   }}
                 >
                   <CardContent sx={{ 
                     p: { xs: 2, sm: 3 },
                     width: '100%',
                     maxWidth: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: 0
                   }}>
                     <Typography 
                       variant="h5" 
                       sx={{ 
                         mb: 3,
                         fontWeight: "bold",
                         textAlign: "center",
                         borderBottom: '2px solid',
                         borderColor: 'primary.main',
                         pb: 1
                       }}
                     >
                       Habilidades Blandas
                     </Typography>
                     <Box 
                       sx={{ 
                         display: 'grid',
                         gridTemplateColumns: {
                           xs: 'repeat(2, 1fr)',
                           sm: 'repeat(3, 1fr)',
                           md: 'repeat(4, 1fr)',
                           lg: 'repeat(6, 1fr)'
                         },
                         gap: 2,
                         justifyItems: 'stretch',
                         width: '100%'
                       }}
                     >
                       {[
                         { skill: "Trabajo en equipo", icon: "people-group" },
                         { skill: "Comunicación efectiva", icon: "comments" },
                         { skill: "Resolución de problemas", icon: "lightbulb" },
                         { skill: "Gestión del tiempo", icon: "clock" },
                         { skill: "Adaptabilidad", icon: "arrows-rotate" },
                         { skill: "Pensamiento analítico", icon: "brain" }
                       ].map((item) => (
                         <motion.div
                           key={item.skill}
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                           style={{ width: '100%' }}
                         >
                           <Card 
                             variant="outlined" 
                             sx={{ 
                               height: 160,
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: 1.5,
                               p: 1.5,
                               textAlign: 'center',
                               background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                               boxShadow: '3px 3px 10px #d1d1d1, -3px -3px 10px #ffffff'
                             }}
                           >
                             <Box
                               component="img"
                               src={`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/svgs/solid/${item.icon}.svg`}
                               sx={{
                                 width: 40,
                                 height: 40,
                                 color: 'primary.main',
                                 filter: 'invert(32%) sepia(99%) saturate(1646%) hue-rotate(232deg) brightness(91%) contrast(98%)'
                               }}
                             />
                             <Typography variant="h6" color="primary">
                               {item.skill}
                             </Typography>
                           </Card>
                         </motion.div>
                       ))}
                     </Box>
                   </CardContent>
                 </Card>
               </motion.div>
             </Grid>
           </Grid>
         </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

