import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5423E7',
    },
    secondary: {
      main: '#DB0BB9',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
