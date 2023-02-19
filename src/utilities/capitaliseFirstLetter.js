function capitaliseFirstLetter(string) {
    if (string.length === 0) {
        return ''
    }
    const splitString = string.split('')
    const firstLetter = splitString[0].toUpperCase()
    splitString.shift()
    splitString.unshift(firstLetter)
    return splitString.join('')
}

module.exports = {
    capitaliseFirstLetter,
}

