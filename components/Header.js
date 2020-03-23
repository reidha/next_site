import Head from 'next/head';

export default function Header() {
    return (
        <Head>
            <title key="title">Reidha works</title>
            <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
    )
}