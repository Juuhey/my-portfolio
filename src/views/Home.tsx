import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 0 },
        gap: 3,
      }}
      className="relative"
    >
      <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
        Bonjour, je m'appelle
      </Typography>
      <Typography variant="h1" sx={{ lineHeight: 1.1 }}>
        Julien Pantel.
      </Typography>
      <Typography variant="h2">Développeur fullstack</Typography>
      <Typography
        variant="h4"
        color="secondary"
        align="left"
        sx={{
          maxWidth: 600,
          mb: 4,
        }}
      >
        Je suis un développeur français passionné par les technologies web et
        l'UI/UX.
        <br />
        Une idée = un outil.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        href="/projets"
        sx={{
          borderRadius: 8,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1.1rem",
        }}
      >
        Voir mes projets
      </Button>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <IconButton
          component={Link}
          href="https://github.com/juuhey"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          color="inherit"
          sx={{ fontSize: 32 }}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://discord.com/users/354239340278185996"
          target="_blank"
          rel="noopener"
          aria-label="Discord"
          color="inherit"
          sx={{ fontSize: 32 }}
        >
          {/* Si tu n'as pas DiscordIcon, tu peux utiliser un SVG inline : */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 00-5.487 0 12.51 12.51 0 00-.617-1.249.07.07 0 00-.073-.035A19.736 19.736 0 003.677 4.369a.064.064 0 00-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 00.031.056c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.372-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.073.009c.12.099.246.198.372.291a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.892.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 00.031-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
          </svg>
        </IconButton>
      </Box>
    </Box>
  );
}
