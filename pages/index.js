import Layout from '../components/Layout';

export default function Index() {
    return (
        <Layout>
            <p>Hello Next.js</p>
            {[...Array(100).keys()].map(x => <p key={x}>Hello Next.js</p>)}
        </Layout>
    );
}
