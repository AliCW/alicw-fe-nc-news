import { Link } from "react-router-dom"
import * as api from "../api"

export default function QueryNav() {
    return (
        <div>
        <nav className="topic-nav">
            <label>Sort By;</label>
            <select>
                <option value="/votes">votes</option>
                <option value="/comments">comments</option>
                <option value="/created_at">date</option>
            </select>
            <label>Order;</label>
            <select>
                <option value="ASC/">ASC</option>
                <option value="DESC/">DESC</option>
            </select>
        </nav>
        </div>
    )
}



//ttOrder(e.target.value.split("/")[1])
//     }}opicnav to set the topic & render the list in /articles/differently



// <label htmlFor="sort-by">Sort by: </label> 
// <select 
//     id="sort-by"
//     value={`${sortBy}/${order}`}
//     onChange={(e) => {
//         setSortBy(e.target.value.split("/")[0])
//         se
//     >
//     <option value="created_at/desc">Date (newest first)</option>
//     <option value="created_at/asc">Date (oldest first)</option>
//     <option value="comment_count/desc">Comment Count (highest first)</option>
//     <option value="comment_count/asc">Comment Count (lowest first)</option>
//     <option value="votes/desc">Votes (highest first)</option>
//     <option value="votes/asc">Votes (lowest first)</option>
// </select>
// </div>
// </nav>