import { createTheme } from "@mui/material";

const myTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#00abc9",
          light: "#5ad6e6",
          dark: "#007a8a",
          contrastText: "#000",
        },
        secondary: {
          main: "#f14628",
          light: "#ff784e",
          dark: "#a12e1a",
          contrastText: "#000",
        },
        tagColors: {
          react: "#61dafb",
          mui: "#007fff",
          tailwind: "#38bdf8",
          redux: "#764abc",
          api: "#10b981",
          // add more here
          default: "#888",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9",
          light: "#e3f2fd",
          dark: "#0d47a1",
          contrastText: "#fff",
        },
        secondary: {
          main: "#ffb74d",
          light: "#ffe97d",
          dark: "#c88719",
          contrastText: "#fff",
        },
        tagColors: {
          react: "#1e90c2",
          mui: "#2196f3",
          tailwind: "#0ea5e9",
          redux: "#a259c4",
          api: "#22d3ee",
          default: "#444",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "28px",
      "@media (min-width:600px)": { fontSize: "32px" },
      "@media (min-width:1000px)": { fontSize: "36px" },
      fontWeight: 800,
    },
    h2: {
      fontSize: "22px",
      "@media (min-width:600px)": { fontSize: "24px" },
      "@media (min-width:1000px)": { fontSize: "28px" },
      fontWeight: 700,
    },
    h3: {
      fontSize: "17px",
      "@media (min-width:600px)": { fontSize: "18px" },
      "@media (min-width:1000px)": { fontSize: "20px" },
      fontWeight: 600,
    },
    h4: {
      fontSize: "13px",
      "@media (min-width:600px)": { fontSize: "13.5px" },
      "@media (min-width:1000px)": { fontSize: "14px" },
      fontWeight: 600,
    },
    body1: {
      fontSize: "12px",
      "@media (min-width:600px)": { fontSize: "13px" },
      "@media (min-width:1000px)": { fontSize: "13.5px" },
    },
    body2: {
      fontSize: "11px",
      "@media (min-width:600px)": { fontSize: "11.5px" },
      "@media (min-width:1000px)": { fontSize: "12px" },
    },
    caption: {
      fontSize: "10px",
      "@media (min-width:600px)": { fontSize: "10.5px" },
      "@media (min-width:1000px)": { fontSize: "11px" },
    },
  },
});

export default myTheme;
