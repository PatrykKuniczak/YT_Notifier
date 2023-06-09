import { createTheme } from '@mui/system';

const THEME = createTheme({
    unstable_sxConfig: {
        size: {
            style: ({ size }) => {
                const { width, height } = size;

                return {
                    width,
                    height
                };
            }
        }
    },
    palette: {
        background: {
            primary: '#fff',
            secondary: '#f1f0f0',
            searchBar: '#eeebeb',
            searchBarFocusOutline: '#7846F0',
            searchIconFilter:
                'invert(5%) sepia(5%) saturate(400%) hue-rotate(219deg) brightness(93%) contrast(93%)'
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
