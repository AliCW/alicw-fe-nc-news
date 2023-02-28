function checkValidName(string) {
    const splitName = string.split('')
    let countSpaces = 0
    if(splitName.length <= 4 || splitName.length >= 50) {
        return false;
    }

    for(let i = 0; i < splitName.length; i++) {
        if (!/([A-Za-z\s])/g.test(splitName[i])) return false;
    }

    for(let j = 0; j < splitName.length; j++) {
        if(splitName[j] === " ") {
            countSpaces += 1;
        }
        if(countSpaces > 1) {
            return false
        }
    }

    return true
}

module.exports = { checkValidName }
