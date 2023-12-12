import { createTheme } from '@mui/system';

const THEME = createTheme({
  palette: {
    background: {
      primary: '#fff',
      secondary: '#eeecec',
      loadingBase: '#dbd9d9',
      loadingHighlight: '#c5c5c5',
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
      gitHubIconBackgroundFilter:
        'brightness(0) saturate(100%) invert(25%) sepia(50%) saturate(4034%) hue-rotate(248deg) brightness(98%) contrast(92%)',
    },
    color: {
      primary: '#16121E',
      placeholder: '#050110',
      snackbarContent: '#1f1f1f',
      danger: '#e53232',
      watchLaterIconFilter:
        'brightness(0) saturate(100%) invert(4%) sepia(24%) saturate(1525%) hue-rotate(218deg) brightness(91%) contrast(92%)',
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
