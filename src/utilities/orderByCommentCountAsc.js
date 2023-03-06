export default function orderByCommentCountAsc(comments){
    let filterComments = [...comments]
    filterComments.sort(function(a, b) {return a.comments_count - b.comments_count})
    return filterComments
}

