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
            primary: '#16121E',
            secondary: '#1b1826',
            searchBar: '#26203B',
            searchBarFocusOutline: '#5215e3',
            searchIconFilter:
                'invert(92%) sepia(8%) saturate(8%) hue-rotate(354deg) brightness(90%) contrast(96%)'
        },
        color: {
            primary: '#e3e1e1',
            placeholder: '#D3D3D3'
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
