import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
		primary: {
      main: '#76bdff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});
// Create a theme instance.
const darkTheme = createTheme({
  palette: {
		mode: "dark",
		primary: {
      main: '#232323',
    },
    secondary: {
      main: '#ff9b2a',
    },
    error: {
      main: red.A400,
    },
  }
});

const theme = createTheme({
	lightTheme, darkTheme,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
	components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
})
export default theme;