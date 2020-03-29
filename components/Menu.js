import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <Link href="/">
                <img src="/static/logo-small.png" alt="logo" height="48"/>
            </Link>
            <Link href="/products/todo/">
                <a>[Android] ToDo</a>
            </Link>
        </>
    )
}