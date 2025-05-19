import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 0 },
        gap: 3,
      }}
      className="relative"
    >
      <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
        Bonjour, je m'appelle
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '4rem' },
          lineHeight: 1.1,
        }}
      >
        Julien Pantel.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          color: 'text.secondary',
          mb: 2,
        }}
      >
        J'aspire à devenir développeur fullstack.
      </Typography>
      <Typography variant="body1" color="secondary" align='left'
        sx={{
          maxWidth: 600,
            mb: 4,
        }}
      >
        Je suis un développeur français passionné par les technologies web et l'UI/UX.<br />
        Une idée = un outil.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{
          borderRadius: 8,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          fontSize: '1.1rem',
        }}
      >
        Voir mes projets
      </Button>
    </Box>
  );
}