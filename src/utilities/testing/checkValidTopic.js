function checkValidTopic(topic){
    const splitTopic = topic.split('')
    if (splitTopic.length > 50 || splitTopic.length < 2) {
        return false
    }
    return true
}

module.exports = { checkValidTopic }