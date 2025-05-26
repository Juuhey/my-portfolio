import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project";
import projectsData from "../data/projectsData.json";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const projects: Project[] = projectsData;

// Récupère toutes les technos uniques
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? [])));

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((p) => p.tags?.includes(filter))
    : projects;

  const theme = useTheme();
  const tagColors = theme.palette.tagColors ?? {};

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        px: 2,
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant={!filter ? "contained" : "outlined"}
          onClick={() => setFilter(null)}
        >
          <Typography variant="h4">
              Tous
            </Typography>
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={filter === tag ? "contained" : "outlined"}
            onClick={() => setFilter(tag)}
            sx={{
              textTransform: "none",
              bgcolor:
                filter === tag
                  ? tagColors[tag.toLowerCase()] || tagColors.default
                  : undefined,
              color: filter === tag ? "#fff" : undefined,
              "&:hover": {
                bgcolor: tagColors[tag.toLowerCase()] || tagColors.default,
                color: "#fff",
              },
            }}
          >
            <Typography variant="h4">
              {tag}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { sm: 2, xs: 2, md: 4 },
          width: "100%",
          justifyItems: "center", // centre les cards dans la colonne
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}
