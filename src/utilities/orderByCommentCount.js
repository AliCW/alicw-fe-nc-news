function orderByCommentCountAsc(comments) {
    let filterComments = [...comments]
    filterComments.sort(function(a, b) {return a.comments_count - b.comments_count})
    return (filterComments.reverse())
}

function orderByCommentCountDesc(comments) {
    let filterComments = [...comments]
    filterComments.sort(function(a, b) {return a.comments_count - b.comments_count})
    return (filterComments)
}

module.exports = {
    orderByCommentCountAsc,
    orderByCommentCountDesc,
}
