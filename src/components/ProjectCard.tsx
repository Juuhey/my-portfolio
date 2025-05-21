import { Card, CardContent, CardMedia, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import type { Project } from '../types/Project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
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
          {project.tags?.map(tag => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
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