function checkValidLink(string){
    const splitURL = string.split('')
    let countDot = 0
    for (let i = 0; i < splitURL.length; i++) {
        if(splitURL[i] === ".") {
            countDot += 1
        }
    }
    if(countDot === 0) {
        return false
    }

    const httpCheck = string.slice(0, 7)
    const httpsCheck = string.slice(0, 8)

     if (httpCheck.toLowerCase() === "http://") {
        return true
     }
    if (httpsCheck.toLowerCase() === "https://") {
        return true  
     }
    return false
}


module.exports = { checkValidLink }