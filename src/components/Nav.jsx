import { Link } from "react-router-dom"

export default function Nav() {
       return (
        <div>         
        <nav className="nav">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/articles">Articles</Link>
            <span> | </span>
            <Link to="/topics">Topics</Link>
        </nav>
        </div>
    )
}

    
