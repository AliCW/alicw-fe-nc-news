function checkValidUsername(string) {
    console.log(string.length)
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





//username & name need to be between 5 & 20 chars - must contain 3 letters