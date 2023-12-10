import { createTheme } from '@mui/system';

const THEME = createTheme({
  palette: {
    background: {
      primary: '#16121E',
      secondary: '#FFFFFF0C',
      loadingBase: '#242626',
      loadingHighlight: '#3a3a3a',
      purple: '#7846F0',
      grey: '#5b5b5e',
      searchBar: '#26203B',
      searchBarFocusOutline: '#5215e3',
      snackbarBackground: '#ffbbbb',
      focusOutline: '#fff',
      closeButtonHover: '#876aea',
      closeButtonActive: '#7c62d7',
      gitHubIconBackgroundFilter:
        'brightness(0) saturate(100%) invert(25%) sepia(50%) saturate(4034%) hue-rotate(248deg) brightness(98%) contrast(92%)',
    },
    color: {
      primary: '#E6E6E6',
      placeholder: '#D3D3D3',
      snackbarContent: '#1f1f1f',
      danger: '#fa2525',
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
