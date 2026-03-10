import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arturo-celg",
    icon: <FaGithub size={24} />,
    color: "#fff",
    hoverColor: "#6e5494",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@arturocl2653?si=-aOhxqP5IROzkVX3",
    icon: <FaYoutube size={24} />,
    color: "#fff",
    hoverColor: "#FF0000",
  },
  {
    label: "Email",
    href: "mailto:acorteslug@gmail.com",
    icon: <MdEmail size={24} />,
    color: "#fff",
    hoverColor: "#EA4335",
  },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#111827", color: "#fff", py: 8, mt: 6 }}
    >
      <Box
        sx={{
          maxWidth: 1152,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
        }}
      >
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 0 } }}>
          {t("footer.rights")}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {socialLinks.map(({ label, href, icon, color, hoverColor }) => (
            <Tooltip
              key={label}
              title={label}
              arrow
              placement="top"
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#1f2937",
                    color: "#fff",
                    fontSize: "0.85rem",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                  },
                },
                arrow: {
                  sx: { color: "#1f2937" },
                },
              }}
            >
              <IconButton
                component="a"
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                sx={{
                  color: color,
                  transition: "color 200ms, transform 200ms",
                  "&:hover": {
                    color: hoverColor,
                    transform: "scale(1.2)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;