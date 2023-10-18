import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from '../contexts/UserContext';
import { SignInContext } from "../contexts/SignInContext"
import NavUserPanel from "./NavUserPanel"

export default function Nav() {
    // const [open, setOpen] = useState(false)
    const { username } = useContext(UserContext)
    const { setOpenSignIn } = useContext(SignInContext)
    const { openSignIn } = useContext(SignInContext)

    // const handleOpen = () => {
    //     setOpen(!open)
    // }

    const signInOpen = () => {
        setOpenSignIn(!openSignIn)
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

                <button onClick={signInOpen} className="nav-user">
                    

                    Sign In
                    { openSignIn === true && <NavUserPanel /> }
                </button> 
                : 
                <button onClick={signInOpen} className="nav-user">
                    {username}
            
                    { openSignIn === true && <NavUserPanel /> }
                </button> 
            }
        </nav>

        </div>
    )
}

    
