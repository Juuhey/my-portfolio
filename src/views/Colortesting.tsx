import { Box, Typography, Button, TextField, Card, CardContent, Switch, FormControlLabel, Slider, Alert } from '@mui/material';

export default function Colortesting() {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Test du Thème MUI
      </Typography>

      <Button variant="contained" color="primary">
        Bouton Principal
      </Button>
      <Button variant="outlined" color="secondary">
        Bouton Secondaire
      </Button>
      <Button variant="text" color="success">
        Bouton Succès
      </Button>

      <TextField label="Champ de texte" variant="outlined" />

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Carte MUI
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Sous-titre
          </Typography>
          <Typography variant="body2">
            Ceci est un exemple de carte pour tester le rendu du thème.
          </Typography>
        </CardContent>
      </Card>

      <FormControlLabel control={<Switch defaultChecked />} label="Interrupteur" />

      <Box sx={{ width: 200 }}>
        <Typography gutterBottom>Slider</Typography>
        <Slider defaultValue={30} aria-label="Slider" />
      </Box>

      <Alert severity="info">Ceci est une alerte d'information</Alert>
      <Alert severity="success">Ceci est une alerte de succès</Alert>
      <Alert severity="warning">Ceci est une alerte d'avertissement</Alert>
      <Alert severity="error">Ceci est une alerte d'erreur</Alert>
    </Box>
  );
}