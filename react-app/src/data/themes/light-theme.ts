import { createTheme } from '@mui/system';

const THEME = createTheme({
    palette: {
        background: {
            primary: '#fff',
            secondary: '#eeecec',
            purple: '#7846F0',
            searchBar: '#eeebeb',
            searchBarFocusOutline: '#7846F0',
            searchIconFilter:
                'invert(94%) sepia(0%) saturate(32%) hue-rotate(142deg) brightness(97%) contrast(93%)'
        },
        color: {
            primary: '#16121E',
            placeholder: '#050110'
        }
    },
    typography: {
        fontWeight: {
            normal: '400',
            bold: '700'
        },
        fontSize: {
            sm: 16,
            md: 18,
            l: 20,
            xl: 24
        }
    },
    shape: {
        borderRadius: 6
    }
});

export default THEME;
