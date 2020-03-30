import Head from './Header';
import { BodyTop } from './BodyCommon';
import Menu from './Menu';
import Footer from './Footer';
import { initGA, logPageView } from '../utils/analytics';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red
    }
});

export default class Layout extends React.Component {
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
                    <Menu />
                    {this.props.children}
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