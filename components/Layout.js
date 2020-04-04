import Head from './Header';
import { BodyTop } from './BodyCommon';
import ResponsiveDrawer from './ResponsiveDrawer';
import Footer from './Footer';
import { initGA, logPageView } from '../utils/analytics';

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
                <Head />
                <BodyTop />
                <ResponsiveDrawer>
                    {this.props.children}
                </ResponsiveDrawer>
                <Footer />
            </>
        )
    }
}

export default Layout;