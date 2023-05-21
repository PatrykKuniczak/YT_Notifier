import { createTheme } from '@mui/system';

const THEME = createTheme({
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
        fontFamily: {
            title: 'Helvetica, serif'
        },
        fontSize: {
            title: 20
        },
        fontWeight: {
            title: '700'
        }
    }
});

export default THEME;
