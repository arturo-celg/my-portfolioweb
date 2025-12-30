import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, sm: 6 },
        py: { xs: 6, md: 16 }
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 672, boxShadow: 3, borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {t('contact.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('contact.subtitle')}
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label={t('contact.name')} variant="outlined" fullWidth required />
            <TextField label={t('contact.email')} variant="outlined" type="email" fullWidth required />
            <TextField
              label={t('contact.message')}
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
              sx={{ alignSelf: 'flex-end' }}
            >
              {t('contact.submit')}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;
