import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Card, CardContent, Typography, Chip, Link, Badge } from "@mui/material";
import { motion } from "framer-motion";
import { getSkills } from "../data/skills";
import { getAboutInfo } from "../data/about";
import { getExperience } from "../data/experience";
import AboutCard from "../components/AboutCard";
import TechStack from "../components/TechStack";
import SimpleCarousel from "../components/SimpleCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function About() {
  const [info, setInfo] = useState(null);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';

  useEffect(() => {
    setInfo(getAboutInfo(lang));
  }, [lang]);

  if (!info) return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography>{t('loading')}</Typography>
    </Box>
  );

  const skills = getSkills(lang);
  const experience = getExperience(lang);
  const certItems = skills.certifications || [];

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

  const scrollHorizontal = () => { };

  const skillSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmDown ? 2 : 3, // visible por columna
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  // Carrusel horizontal por categorías (columna = slide)
  const categorySliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmDown ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box component="section" id="about" sx={{ scrollMarginTop: { xs: '56px', sm: '64px' } }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 }, maxWidth: '100%' }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4} alignItems="flex-start">
              {/* Card combinado: Información Personal, Educación y Experiencia */}
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card
                    elevation={3}
                    component={motion.div}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', md: '320px 1fr', lg: '360px 1fr' },
                          gap: { xs: 3, md: 4 },
                          alignItems: 'start',
                        }}
                      >
                        {/* Información Personal */}
                        <Box sx={{ width: '100%' }}>
                          <AboutCard {...info} />
                        </Box>

                        {/* Educación + Experiencia */}
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                            gap: { xs: 3, lg: 4 },
                          }}
                        >
                          <Box>
                            {/* Educación */}
                            <Typography
                              variant="h5"
                              sx={{
                                mb: 2.5,
                                fontWeight: "bold",
                                color: "primary.main",
                                borderBottom: '3px solid',
                                borderColor: 'primary.main',
                                pb: 1,
                                textAlign: { xs: 'left', sm: 'center', lg: 'left' },
                              }}
                            >
                              {t('education')}
                            </Typography>
                            {experience.education.map((edu, index) => (
                              <Box key={index} sx={{ mb: 2.5 }}>
                                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                                  {edu.degree}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.25 }}>
                                  {edu.period}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                  {edu.institution}
                                </Typography>
                              </Box>
                            ))}
                          </Box>

                          <Box>
                            {/* Experiencia Laboral */}
                            <Typography
                              variant="h5"
                              sx={{
                                mb: 2.5,
                                fontWeight: "bold",
                                color: "primary.main",
                                borderBottom: '3px solid',
                                borderColor: 'primary.main',
                                pb: 1,
                                textAlign: { xs: 'left', sm: 'center', lg: 'left' },
                              }}
                            >
                              {t('workExperience')}
                            </Typography>
                            {experience.work.map((job, index) => (
                              <Box key={index} sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                                  {job.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.25 }}>
                                  {job.period}
                                </Typography>
                                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                                  {job.company}
                                </Typography>
                                <Box component="ul" sx={{ pl: 2.5, mb: 1.5 }}>
                                  {job.description.map((item, i) => (
                                    <Typography component="li" key={i} variant="body2" sx={{ mb: 0.5 }}>
                                      {item}
                                    </Typography>
                                  ))}
                                </Box>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                  {job.technologies.map((tech) => (
                                    <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                  ))}
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Certificaciones (carrusel) */}
              <Grid item xs={12} id="certifications" sx={{ display: 'flex', minWidth: 0, scrollMarginTop: { xs: '56px', sm: '64px' } }}>
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
                        {t('certifications')}
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
                              </CardContent>
                            </Card>
                          )}
                          getKey={(c, i) => c.name + i}
                        />
                      </Box>

                      {/* Carrusel cursos (separado) */}
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>{t('courses')}</Typography>
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

              {/* Habilidades Técnicas */}
              <Grid item xs={12} id="skills" sx={{ display: 'flex', minWidth: 0, scrollMarginTop: { xs: '56px', sm: '64px' }}}>
                <motion.div variants={itemVariants} style={{ width: '100%', minWidth: 0 }}>
                  <Card
                    elevation={3}
                    component={motion.div}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    sx={{ width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', minWidth: 0 }}
                  >
                    <CardContent sx={{p: { xs: 2, sm: 3 } }}>
                      <Typography
                        variant="h5"
                        sx={{ mb: 3, fontWeight: "bold", textAlign: "center", borderBottom: '2px solid', borderColor: 'primary.main', pb: 1 }}
                      >
                        {t('technicalSkills')}
                      </Typography>

                      {/* Carrusel horizontal de categorías (cada slide es una columna) */}
                      <Box sx={{  width: '100%'}}>
                        <Slider {...categorySliderSettings}>
                          {skills.technical.map((category, index) => (
                            <Box key={category.category} sx={{ px: 1 }}>
                              <Card
                                variant="outlined"
                                sx={{
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                  backdropFilter: 'blur(10px)',
                                }}
                              >
                                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                                  <Typography
                                    variant="h6"
                                    color="primary"
                                    textAlign="center"
                                    sx={{ pb: 1, borderBottom: '2px solid', borderColor: 'primary.main', mb: 2 }}
                                  >
                                    {category.category}
                                  </Typography>

                                  {/* Lista de skills de la categoría (sin carrusel interno) */}
                                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1.25 }}>
                                    {category.items.map((skill) => (
                                      <Box
                                        key={skill.name}
                                        sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: 1.5,
                                          border: '1px solid',
                                          borderColor: 'divider',
                                          borderRadius: 1.5,
                                          px: 1.5,
                                          py: 1,
                                          bgcolor: 'background.paper',
                                        }}
                                      >
                                        {/* banderita + icono con fallback */}
                                        <Box
                                          component="img"
                                          src={skill.iconUrl ?? `https://img.icons8.com/color/48/${skill.icon8Name}.png`}
                                          alt={skill.displayName}
                                          sx={{ width: 28, height: 28, objectFit: 'contain' }}
                                          onError={(e) => {
                                            // si el personalizado falla, intenta el genérico de icons8; si ya era genérico, oculta
                                            const generic = `https://img.icons8.com/color/48/${skill.icon8Name}.png`;
                                            if (skill.iconUrl && e.currentTarget.src !== generic) {
                                              e.currentTarget.src = generic;
                                            } else {
                                              e.currentTarget.style.display = 'none';
                                            }
                                          }}
                                        />

                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                          {skill.displayName}
                                        </Typography>
                                      </Box>
                                    ))}
                                  </Box>
                                </CardContent>
                              </Card>
                            </Box>
                          ))}
                        </Slider>
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
                      minWidth: 0,
                      mb: 3
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
                        {t('softSkills')}
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
                        {(skills.softSkills || []).map((item) => (
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
                                {item.name}
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

