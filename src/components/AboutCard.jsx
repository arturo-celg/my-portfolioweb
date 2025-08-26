import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function AboutCard({ image, title, description, extra }) {
  return (
    <Card className="max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
      {/* Imagen lateral */}
      <CardMedia
        component="img"
        className="md:w-1/3 object-cover"
        image={image}
        alt={title}
      />

      {/* Contenido */}
      <CardContent className="flex flex-col justify-center p-8">
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" className="mb-4">
          {description}
        </Typography>
        {extra && (
          <Typography variant="body1" color="text.secondary">
            {extra}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default AboutCard;
