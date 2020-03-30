import Layout from '../components/Layout';

import Button from '@material-ui/core/Button';

export default function Index(props) {
    console.log('Index');
    console.table(props);
    return (
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    );
}
