import {
  Box,
  Typography,
  Divider,
  Button,
  Link,
} from "@mui/material";

import TechGrid from "../components/TechGrid";

// Catégorisation
const langages = [
  { key: "javascript", label: "JavaScript", logo: "/logos/javascript.png" },
  { key: "typescript", label: "TypeScript", logo: "/logos/typescript.png" },
  { key: "php", label: "PHP", logo: "/logos/php.png" },
  { key: "sql", label: "SQL", logo: "/logos/mysql.png" },
  { key: "python", label: "Python", logo: "/logos/python.png"},
  { key: "html", label: "HTML5", logo: "/logos/html.png" },
  { key: "css", label: "CSS", logo: "/logos/css.png" },
];

const frameworks = [
  { key: "react", label: "React", logo: "/logos/react.png" },
  { key: "nextjs", label: "Next.js", logo: "/logos/nextjs.svg" },
  { key: "angular", label: "Angular", logo: "/logos/angular.png" },
  { key: "mui", label: "MUI", logo: "/logos/mui.png" },
  { key: "tailwind", label: "Tailwind", logo: "/logos/tailwind.png" },
  { key: "vite", label: "Vite", logo: "/logos/vite.png" },
  { key: "webflow", label: "Webflow", logo: "/logos/webflow.webp" },
  { key: "wordpress", label: "WordPress", logo: "/logos/wordpress.png" },
];

const design = [
  { key: "figma", label: "Figma", logo: "/logos/figma.png" },
  { key: "illustrator", label: "Illustrator", logo: "/logos/illustrator.png" },
];

const outils = [
  { key: "insomnia", label: "Insomnia", logo: "/logos/insomnia.svg" },
  { key: "api", label: "API", logo: "/logos/nodejs.png" },
];

export default function CV() {
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
          Email : jpantel.pro@gmail.com
          <br />
          Localisation : France, Béziers
        </Typography>
      </Box>

      <Divider />

      {/* À propos */}
      <Box>
        <Typography variant="h2" color="secondary.main">
          À propos
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Développeur passionné par les technologies modernes, l'expérience
          utilisateur et la création d’outils web innovants. Curieux, autonome,
          et toujours prêt à apprendre de nouvelles choses.
        </Typography>
      </Box>

      {/* Skills */}
      <Box>
        <Typography variant="h2" color="secondary.main" sx={{ mb: 2 }}>
          Compétences
        </Typography>
        <TechGrid title="Langages" techs={langages} />
        <TechGrid title="Frameworks / Librairies" techs={frameworks} />
        <TechGrid title="Outils Design" techs={design} />
        <TechGrid title="Outils Dév / Autres" techs={outils} />
      </Box>

      {/* Expériences */}
      <Box>
        <Typography variant="h2" color="secondary.main">
          Expériences professionnelles
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">
            Stage Développement / Graphisme / Communication
          </Typography>
          <Typography variant="body2" color="text.secondary">
            IMT Mines Alès – 08/04/24 au 21/06/24
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            - Développement d’un prototype de carte intéractive Leaflet + React
            avec API Node.js
            <br />
            - Mise en ligne via Moodle de la formation "Santé, sécurité et
            sûreté au travail"
            <br />
            - Application d'une charte graphique sur supports numériques
            <br />
            - Création de supports de communication (affiches, flyers)
            <br />- Réunions et conférences avec les équipes pédagogiques et
            administratives
          </Typography>
        </Box>
        <br />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">Stage Développement Web</Typography>
          <Typography variant="body2" color="text.secondary">
            Entreprise Xylecho – 03/02/25 au 25/04/25
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            - Refonte du{" "}
            <Link
              href="https://www.xylecho.com"
              color="secondary.main"
              target="_blank"
              rel="noopener"
            >
              site web
            </Link>{" "}
            via le CMS Webflow
            <br />
            - Optimisation SEO en collaboration avec l'entreprise Unigma
            <br />
            - Développement d'une carte intéractive Leaflet, NextJS (React +
            Typescript)
            <br />- Mise en production et hébergement via Vercel sur{" "}
            <Link
              href="https://map.xylecho.com"
              color="secondary.main"
              target="_blank"
              rel="noopener"
            >
              map.xylecho.com
            </Link>
            <br />- Réunions et conférences avec les équipes pédagogiques et
            administratives
          </Typography>
        </Box>
      </Box>

      {/* Formations */}
      <Box>
        <Typography variant="h2" color="secondary.main">
          Formations
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">
            BUT MMI (Métiers du Multimédia et de l'Internet)
          </Typography>
          <Typography variant="h4">Parcours Développement Web</Typography>
          <Typography variant="body2" color="text.secondary">
            IUT Béziers – 2022 - aujourd'hui (actuellement en 3<sup>ème</sup>{" "}
            année)
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">BAC</Typography>
          <Typography variant="h4">
            Spécialité Numérique et Sciences de l'Informatique
          </Typography>
          <Typography variant="h4">
            Spécialité Anglais Monde Contemporain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Baccalauréat – 2021-2022
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
          sx={{
            borderRadius: 8,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            color: "#000",
          }}
        >
          Télécharger mon CV
        </Button>
      </Box>
    </Box>
  );
}
