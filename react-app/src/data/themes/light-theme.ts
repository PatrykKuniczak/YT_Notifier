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
            searchBar: '#eeebeb'
        },
        color: {
            primary: '#16121E',
            secondary: '#f1f0f0',
            placeholder: '#16121E'
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
    }
});

export default THEME;
