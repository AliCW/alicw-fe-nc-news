import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/articles">Articles</Link>

        </nav>
    )
}