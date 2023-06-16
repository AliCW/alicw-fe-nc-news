import { Link } from "react-router-dom"

export default function NavUserPanel() {
    return (
    <div>
    <ul className="menu">
        <Link to="/signup" className="menu-item">
            <li className="menu-link">
                Sign Up
            </li>
        </Link>
        <Link to="/login" className="menu-item">
            <li className="menu-link">
                Login
            </li>
        </Link>
    </ul>
</div>
    )
}