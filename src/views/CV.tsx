import { Box, Typography, Divider, Chip, Button, useTheme } from "@mui/material";

export default function CV() {
  const theme = useTheme();
  const tagColors = theme.palette.tagColors ?? {};

  // Récupération dynamique des compétences depuis les clés de tagColors (hors "default")
  const skills = Object.keys(tagColors).filter((tag) => tag !== "default");

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: 8,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* En-tête */}
      <Box>
        <Typography variant="h1">Julien Pantel</Typography>
        <Typography variant="h4" color="primary">
          Développeur Fullstack
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Email : julien@example.com
          <br />
          Téléphone : 06 00 00 00 00
          <br />
          Localisation : France
        </Typography>
      </Box>

      <Divider />

      {/* À propos */}
      <Box>
        <Typography variant="h2">À propos</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Développeur passionné par les technologies modernes, l'expérience utilisateur
          et la création d’outils web innovants. Curieux, autonome, et toujours prêt
          à apprendre de nouvelles choses.
        </Typography>
      </Box>

      {/* Compétences dynamiques */}
      <Box>
        <Typography variant="h2">Compétences</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                backgroundColor: tagColors[skill.toLowerCase()],
                color: "#fff",
                textTransform: "capitalize",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Expériences */}
      <Box>
        <Typography variant="h2">Expériences professionnelles</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">Stage Développeur Web</Typography>
          <Typography variant="body2" color="text.secondary">
            Entreprise XYZ – Janvier 2024 à Juin 2024
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            - Développement d’une application React avec API Node.js<br />
            - Mise en place du design system avec MUI<br />
            - Intégration responsive via Tailwind
          </Typography>
        </Box>
      </Box>

      {/* Formation */}
      <Box>
        <Typography variant="h2">Formation</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">Titre Professionnel Développeur Web</Typography>
          <Typography variant="body2" color="text.secondary">
            Centre de formation ABC – 2023-2024
          </Typography>
        </Box>
      </Box>

      {/* Bouton téléchargement */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          href="/cv-julien-pantel.pdf"
          target="_blank"
          rel="noopener"
          sx={{ borderRadius: 8, px: 4, py: 1.5, fontWeight: 600 }}
        >
          Télécharger le CV PDF
        </Button>
      </Box>
    </Box>
  );
}
