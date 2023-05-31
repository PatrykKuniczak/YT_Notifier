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
            placeholder: '#16121E'
        }
    },
    typography: {
        fontFamily: 'Helvetica, serif',
        fontWeight: {
            normal: '400',
            bold: '700'
        },
        fontSize: {
            sm: 10,
            md: 12,
            l: 16,
            xl: 24
        }
    }
});

export default THEME;
