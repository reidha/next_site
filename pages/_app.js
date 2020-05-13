import PropTypes from 'prop-types';

import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../utils/theme';
import { title } from '../utils/constant';

export default function App({ Component, pageProps }) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        // eslint-disable-next-line no-undef
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title key="title">{title}</title>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </MuiThemeProvider>
        </>
    )
}

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
}