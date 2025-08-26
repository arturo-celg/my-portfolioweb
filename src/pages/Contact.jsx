import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16"
    >
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <Typography variant="h4" component="h2" gutterBottom>
            Contáctame
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mb-6">
            Si tienes alguna propuesta, proyecto o solo quieres saludar, llena el formulario 👇
          </Typography>

          <form className="flex flex-col gap-6">
            <TextField label="Nombre" variant="outlined" fullWidth required />
            <TextField label="Correo" variant="outlined" type="email" fullWidth required />
            <TextField
              label="Mensaje"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="self-end"
            >
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Contact;
