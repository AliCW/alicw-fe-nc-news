import { Link } from "react-router-dom"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useState } from "react"
import NavUserPanel from "./NavUserPanel"

export default function Nav() {
    const [open, setOpen] = useState(false)

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

            <button onClick={handleOpen} className="navUser">
            <BiDotsVerticalRounded className="navDropdown" />
                {console.log(open)}
                { open === true && <NavUserPanel /> }
            </button>
        </nav>
        </div>
    )
}

    
