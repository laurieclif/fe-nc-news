import { Link } from "react-router-dom"

function Header() {
    return (
        <header id="header">
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/articles">
                Articles
            </Link>
            <Link className="link" to="/topics">
                Topics
            </Link>
        </header>
    )
}

export default Header