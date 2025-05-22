import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project";
import projectsData from "../data/projectsData.json"; // <-- import du JSON

const projects: Project[] = projectsData;

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <Typography variant="h3" gutterBottom>
        Mes Projets
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 4,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </div>
  );
}