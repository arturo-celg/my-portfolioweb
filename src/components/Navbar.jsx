import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar className="bg-gray-900">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="font-bold">
          Mi Portafolio
        </Typography>
        <div className="space-x-4">
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
