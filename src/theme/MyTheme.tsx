import { createTheme } from "@mui/material";

const myTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#00abc9',
          light: '#5ad6e6',
          dark: '#007a8a',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f14628',
          light: '#ff784e',
          dark: '#a12e1a',
          contrastText: '#fff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9',
          light: '#e3f2fd',
          dark: '#0d47a1',
          contrastText: '#fff',
        },
        secondary: {
          main: '#ffb74d',
          light: '#ffe97d',
          dark: '#c88719',
          contrastText: '#fff',
        },
      },
    },
  },
});

export default myTheme;