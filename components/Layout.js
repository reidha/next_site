import { BodyTop } from './BodyCommon';
import ResponsiveDrawer from './ResponsiveDrawer';
import Footer from './Footer';
import { initGA, logPageView } from '../utils/analytics';

import PropTypes from 'prop-types';

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
                <BodyTop />
                <ResponsiveDrawer>
                    {this.props.children}
                </ResponsiveDrawer>
                <Footer />
            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
