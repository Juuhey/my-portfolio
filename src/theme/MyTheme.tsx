import { createTheme } from '@mui/material/styles';

const mytheme = createTheme({
  palette: {
    primary: {
      main: '#851d4b',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '##006b36',
        //
        //
        //
    },
  },
});

export default mytheme;
