import Head from 'next/head';
import { title } from './Constant';

export default function Header() {
    return (
        <Head>
            <title key="title">{title}</title>
            <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />

            <meta name="description" content="Plan to show all my works."/>

            <meta name="google-site-verification" content="4qcBjAVTi_jXk7u-hAGcWCOp9Ssyg0W_t_lU-33oDb8" />

            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

            

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
    )
}