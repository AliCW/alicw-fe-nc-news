export default function DeleteCommentCheck(props) {
    console.log(props)

    if(props.author === props.user.username) {
        return (
            <p>delete</p>
        )
    }

}