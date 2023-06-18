import { Link } from "react-router-dom"
import { 
    BsArrowRightCircleFill,
    BsArrowLeftCircleFill,
} 
from "react-icons/bs";
import { IconContext } from "react-icons";


export default function Error() {
    return (
        <IconContext.Provider value={{ color: "#cc00ff" }}>
        <div >
            <h3>This page is not available</h3>
            <BsArrowRightCircleFill /> 
            <Link to="/articles">   Return to reality   </Link>
            <BsArrowLeftCircleFill />
        </div>
        </IconContext.Provider>
    )
}