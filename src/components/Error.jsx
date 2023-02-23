import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            <h3>This page is not available</h3>
            <Link to="/">Return to reality</Link>
        </div>
    )
}