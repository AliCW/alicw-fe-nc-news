import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { UserContext } from '../contexts/UserContext';
import NavUserPanel from "./NavUserPanel"

export default function Nav() {
    const [open, setOpen] = useState(false)
    const { username } = useContext(UserContext)

    const handleOpen = () => {
        setOpen(!open)
    }

       return (
        <div >         
        <nav className="nav">
            <Link id="navLink" className="nav-button" to="/">
                <button id="navButton" className="nav-button">Home</button>
            </Link>

            <Link id="navLink" className="nav-button" to="/articles">
                <button id="navButton" className="nav-button">Articles</button>
            </Link>

            <Link id="navLink" className="nav-button" to="/topics">
                <button id="navButton" className="nav-button">Topics</button>
            </Link>
            
            {username === '' ? 

                <button onClick={handleOpen} className="nav-user">
                    

                    Sign In
                    { open === true && <NavUserPanel /> }
                </button> 
                : 
                <button onClick={handleOpen} className="nav-user">
                    {username}
            
                    { open === true && <NavUserPanel /> }
                </button> 
            }
        </nav>

        </div>
    )
}

    
