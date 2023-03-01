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
            <span> | </span>
            <Link to="/signup">Sign Up</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
        </nav>
        </div>
    )
}

    
