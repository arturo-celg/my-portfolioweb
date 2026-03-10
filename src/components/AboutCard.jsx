import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AboutCard({ name, role, description, image }) {
  return (
    <Card sx={{ maxWidth: 360, mx: 'auto', bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2 }}>
      <CardContent sx={{ p: 3, textAlign: 'center' }}>
        <Avatar src={image} alt={name} sx={{ width: 128, height: 128, mx: 'auto', mb: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
        <Typography color="primary">{role}</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, width: '100%' }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}
