function checkValidUsername(string){
    const splitString = string.split('')
    let countLetters = 0
    if(splitString.length < 5 || splitString.length > 20) {
        return false;
    }
    for(let i = 0; i < splitString.length; i++) {
        if(/([A-Za-z])/g.test(splitString[i])) {
            countLetters += 1;
        }
    }

    if (countLetters < 3) {
        return false;
    }

    return true;
}

module.exports = { checkValidUsername }