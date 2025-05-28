import { Card, CardContent, CardMedia, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import type { Project } from '../types/Project';
import { useTheme } from "@mui/material/styles";

// ...existing code...
// Fonction utilitaire pour déterminer si une couleur est foncée
function isColorDark(hex: string) {
  // Retire le # si présent
  hex = hex.replace("#", "");
  // Si la couleur est trop courte, retourne false (par sécurité)
  if (hex.length !== 6) return false;
  // Convertit en RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Calcul de luminance relative (perçue)
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5;
}

// ...existing imports...

export default function ProjectCard({ project }: { project: Project }) {
  const theme = useTheme();
  const tagColors = theme.palette.tagColors ?? {};

  return (
    <Card sx={{width : "100%", maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {project.image && (
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.tags?.map(tag => {
            const bg = tagColors[tag.toLowerCase()] || tagColors.default;
            const textColor =
              bg.toLowerCase() === "#000" || bg.toLowerCase() === "#000000"
                ? "#fff"
                : isColorDark(bg)
                ? "#fff"
                : "#000";
            return (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: bg,
                  color: textColor,
                  border:
                    tag.toLowerCase() === "nextjs" && (bg.toLowerCase() === "#000" || bg.toLowerCase() === "#000000")
                      ? "1.5px solid #fff"
                      : undefined,
                }}
              />
            );
          })}
        </Box>
        {/* Ajout de l'affichage des langages */}
        {project.langages && project.langages.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {project.langages.map(lang => (
              <Chip
                key={lang}
                label={lang}
                size="small"
                variant="outlined"
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
      {project.link && (
        <CardActions sx={{ mt: 'auto' }}>
          <Button size="small" href={project.link} target="_blank" rel="noopener">
            Voir le projet
          </Button>
        </CardActions>
      )}
    </Card>
  );
}