import { useState, useEffect } from "react";
import { Box, Container, Typography, Card, CardContent, useTheme, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';

  useEffect(() => {
    setProjectList(getProjects(lang));
  }, [lang]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        pt: { xs: 2, md: 2 },
        pb: { xs: 4, md: 6 },
        bgcolor: 'transparent',
        scrollMarginTop: { xs: '56px', sm: '64px' }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: 'text.primary',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: { xs: 90, md: 140 },
              height: 6,
              margin: '12px auto 0',
              borderRadius: 999,
              background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          {t('projects.title')}
        </Typography>

        <Card className="lego-card lego-architecture-card lego-project-shell" sx={{ overflow: 'visible' }}>
          <CardContent sx={{ px: { xs: 1, md: 2 }, py: { xs: 2, md: 3 } }}>
            <Box className="lego-stud-strip lego-stud-strip--thin" />
            <Slider {...settings}>
              {projectList.map((proj) => (
                <Box key={proj.id} sx={{ p: 2 }}>
                  <ProjectCard {...proj} />
                </Box>
              ))}
            </Slider>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
