import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'light'
    },
    typography: {
        fontFamily: 'Roboto',
        h4: {
            lineHeight: '1.8'
        },
        h5: {
            lineHeight: '2'
        }
    }
});