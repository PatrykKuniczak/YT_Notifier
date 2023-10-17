import { createTheme } from '@mui/system';

const THEME = createTheme({
  palette: {
    background: {
      primary: '#fff',
      secondary: '#eeecec',
      danger: '#fa2525',
      purple: '#7846F0',
      grey: '#5b5b5e',
    },
    color: {
      primary: '#E6E6E6',
    },
  },
  typography: {
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    fontSize: {
      sm: 12,
      md: 18,
      l: 20,
      xl: 24,
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default THEME;
