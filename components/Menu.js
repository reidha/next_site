import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/app/todo">
                <a>App: TODO</a>
            </Link>
        </>
    )
}