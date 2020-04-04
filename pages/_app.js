import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../utils/theme';

export default function App({ Component, pageProps }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </MuiThemeProvider>
    )
}

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
}