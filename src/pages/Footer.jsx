import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <Typography variant="body1" className="mb-4 md:mb-0">
          © 2025 Arturo CL. Todos los derechos reservados.
        </Typography>

        <div className="flex space-x-6">
          <Link href="https://github.com/artur-celg" target="_blank" rel="noopener" className="hover:text-yellow-300 transition">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/artur-cl" target="_blank" rel="noopener" className="hover:text-yellow-300 transition">
            LinkedIn
          </Link>
          <Link href="mailto:tuemail@dominio.com" className="hover:text-yellow-300 transition">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
