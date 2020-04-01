import Layout from '../../components/Layout';

export default function Todo() {
    return (
        <Layout>
            <p>Todo</p>
            {[...Array(100).keys()].map(x => <p key={x}>Todo</p>)}
        </Layout>
    );
}
