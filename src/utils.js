function capitaliseLinks(topic) {
    const splitString = topic.split('')
    const firstLetter = splitString[0].toUpperCase()
    splitString.shift()
    splitString.unshift(firstLetter)
    return splitString.join('')
}

module.exports = {
    capitaliseLinks,
}