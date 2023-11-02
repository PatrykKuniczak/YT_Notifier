import { createTheme } from '@mui/system';

const THEME = createTheme({
  palette: {
    background: {
      primary: '#fff',
      secondary: '#eeecec',
      loadingBase: '#dbd9d9',
      loadingColor: '#c5c5c5',
      danger: '#fa2525',
      purple: '#7846F0',
      grey: '#5b5b5e',
      searchBar: '#eeebeb',
      searchBarFocusOutline: '#7846F0',
      searchIconFilter: 'invert(94%) sepia(0%) saturate(32%) hue-rotate(142deg) brightness(97%) contrast(93%)',
      snackbarBackground: '#ffbbbb',
      focusOutline: '#16121E',
      closeButtonHover: '#876aea',
      closeButtonActive: '#7c62d7',
    },
    color: {
      primary: '#16121E',
      placeholder: '#050110',
      snackbarContent: '#1f1f1f',
      danger: '#e53232',
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
