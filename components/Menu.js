import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/apps/todo">
                <a>App: TODO</a>
            </Link>
        </>
    )
}