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
            <Link className="navLink" to="/">
                <button className="navButton">Home</button>
            </Link>

            <Link className="navLink" to="/articles">
                <button className="navButton">Articles</button>
            </Link>

            <Link className="navLink" to="/topics">
                <button className="navButton">Topics</button>
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

    
