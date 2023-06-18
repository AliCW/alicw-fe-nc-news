import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from '../contexts/UserContext';

export default function NavUserPanel() {
    const { username } = useContext(UserContext)
    return (
    <div>
    <ul className="menu">
        { username === '' ? 
        <div>
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
        </div>
             :
        <div>
        <Link to="/add-article" className="menu-item">
            <li className="menu-link">
                Add Article
            </li>
        </Link>
        </div>
        }
    </ul>
</div>
    )
}