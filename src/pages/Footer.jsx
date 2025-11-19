import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#111827', color: '#fff', py: 8, mt: 6 }}>
      <Box sx={{ maxWidth: 1152, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
        <Typography variant="body1" sx={{ mb: { xs: 2, md: 0 } }}>
          © 2025 Arturo CL. Todos los derechos reservados.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link href="https://github.com/artur-celg" target="_blank" rel="noopener" sx={{ color: 'inherit', '&:hover': { color: 'warning.main' }, transition: 'color 200ms' }}>
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/artur-cl" target="_blank" rel="noopener" sx={{ color: 'inherit', '&:hover': { color: 'warning.main' }, transition: 'color 200ms' }}>
            LinkedIn
          </Link>
          <Link href="mailto:tuemail@dominio.com" sx={{ color: 'inherit', '&:hover': { color: 'warning.main' }, transition: 'color 200ms' }}>
            Email
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
