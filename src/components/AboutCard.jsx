import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AboutCard({ name, role, description, image }) {
  return (
    <Card className="lego-card" sx={{ maxWidth: 360, mx: 'auto', bgcolor: 'background.paper' }}>
      <CardContent sx={{ p: 3, textAlign: 'center', position: 'relative' }}>
        <Box className="lego-stud-strip" />
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 128,
            height: 128,
            mx: 'auto',
            mb: 2,
            border: (theme) => `4px solid ${theme.palette.lego.yellow}`,
            boxShadow: '0 8px 16px rgba(0,0,0,0.18)',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
        {role && (
          <Typography
            color="primary"
            variant="body2"
            sx={{
              display: 'inline-block',
              mt: 0.75,
              px: 1.25,
              py: 0.5,
              borderRadius: 2,
              fontWeight: 600,
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              bgcolor: (theme) => theme.palette.mode === 'light' ? 'rgba(198,40,40,0.08)' : 'rgba(255,107,107,0.12)',
            }}
          >
            {role}
          </Typography>
        )}
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ mt: 2, width: '100%', lineHeight: 1.7, textAlign: 'center' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
