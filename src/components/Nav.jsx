import { Link } from "react-router-dom"
import { BiDotsVerticalRounded } from "react-icons/bi"
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
            <Link id="navLink" className="navLink" to="/">
                <button id="navButton" className="navButton">Home</button>
            </Link>

            <Link id="navLink" className="navLink" to="/articles">
                <button id="navButton" className="navButton">Articles</button>
            </Link>

            <Link id="navLink" className="navLink" to="/topics">
                <button id="navButton" className="navButton">Topics</button>
            </Link>
            
            {username === '' ? 

                <button onClick={handleOpen} className="navUser">
                    Sign In
                    <BiDotsVerticalRounded className="navUser" />
                    { open === true && <NavUserPanel /> }
                </button> 
                : 
                <button onClick={handleOpen} className="navUser">
                    {username}
                    <BiDotsVerticalRounded className="navUser" />                
                    { open === true && <NavUserPanel /> }
                </button> 
            }
        </nav>

        </div>
    )
}

    
