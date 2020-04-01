import Head from './Header';
import { BodyTop } from './BodyCommon';
import ResponsiveDrawer from './ResponsiveDrawer';
import Footer from './Footer';
import { initGA, logPageView } from '../utils/analytics';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light'
    }
});

class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <Head />
                    <BodyTop />
                    <ResponsiveDrawer>
                        {this.props.children}
                    </ResponsiveDrawer>
                    <Footer />

                    <style jsx global >{`
                    body {
                        font-family: 'Roboto'
                    }  
                    `}</style>
                </MuiThemeProvider>
            </>
        )
    }
}

export default Layout;