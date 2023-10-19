import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="navigation-page">
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/animals">Animals</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
