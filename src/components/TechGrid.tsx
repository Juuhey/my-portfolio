import { Box, Typography, useTheme } from "@mui/material";

type Tech = {
  key: string;
  label: string;
  logo: string;
};

type TechGridProps = {
  title?: string;
  techs: Tech[];
};

export default function TechGrid({ title, techs }: TechGridProps) {
  const theme = useTheme();
  // Fond neutre selon le mode
  const bgColor =
    theme.palette.mode === "dark" ? "#222" : "#fff";
  const borderColor =
    theme.palette.mode === "dark" ? "#333" : "#e0e0e0";

  return (
    <Box sx={{ mb: 3 }}>
      {title && (
        <Typography variant="h3" sx={{ mt: 2, mb: 1 }}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "center",
        }}
      >
        {techs.map(({ key, label, logo }) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 80,
              mb: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                borderRadius: 2,
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <img
                src={logo}
                alt={label}
                width={32}
                height={32}
                style={{
                  objectFit: "contain",
                  aspectRatio: "1 / 1",
                  maxWidth: "80%",
                  maxHeight: "80%",
                  display: "block",
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}