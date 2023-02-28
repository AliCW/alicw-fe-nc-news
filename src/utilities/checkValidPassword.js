function checkValidPassword(string) {
    const splitPassword = string.split('')
    if (splitPassword.length <= 7) {
        return false;
    }
    if (!/([A-Z])/g.test(string)) return false;
    if (!/([a-z])/g.test(string)) return false; 
    if (!/([0-9])/g.test(string)) return false; 

    let countSymbols = 0

    for(let i = 0; i < splitPassword.length; i++) {
        if (splitPassword[i] === "!" ||
            splitPassword[i] === "[" ||
            splitPassword[i] === "]" ||
            splitPassword[i] === "_" ||
            splitPassword[i] === "(" ||
            splitPassword[i] === ")" ||
            splitPassword[i] === "*" ||
            splitPassword[i] === "." ||
            splitPassword[i] === "?" ||
            splitPassword[i] === "<" ||
            splitPassword[i] === ">" ||
            splitPassword[i] === "#" ||
            splitPassword[i] === ";" ||
            splitPassword[i] === "^" ||
            splitPassword[i] === "%" ||
            splitPassword[i] === "$" ||
            splitPassword[i] === "/")
            {
                countSymbols += 1;
            }
    };

    if (countSymbols === 0) {
        return false
    }
    return true
}

module.exports = {
    checkValidPassword,
}