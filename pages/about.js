import Layout from '../components/Layout';

export default function Index(props) {
    console.log('About');
    return (
        <Layout>
            <p>About</p>
            {[...Array(100).keys()].map(x => <p key={x}>About</p>)}
        </Layout>
    );
}
