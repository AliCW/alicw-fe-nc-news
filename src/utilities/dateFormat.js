const dateFormat = (today) => {
    let dateArray = today.split(' ');
                if (dateArray[0] === 'Jan') {
                    dateArray.shift()
                    dateArray.unshift('01')
                }
                if (dateArray[0] === 'Feb') {
                    dateArray.shift()
                    dateArray.unshift('02')
                }
                if (dateArray[0] === 'Mar') {
                    dateArray.shift()
                    dateArray.unshift('03')
                }
                if (dateArray[0] === 'Apr') {
                    dateArray.shift()
                    dateArray.unshift('04')
                }
                if (dateArray[0] === 'May') {
                    dateArray.shift()
                    dateArray.unshift('05')
                }
                if (dateArray[0] === 'Jun') {
                    dateArray.shift()
                    dateArray.unshift('06')
                }
                if (dateArray[0] === 'Jul') {
                    dateArray.shift()
                    dateArray.unshift('07')
                }
                if (dateArray[0] === 'Aug') {
                    dateArray.shift()
                    dateArray.unshift('08')
                }
                if(dateArray[0] === 'Sep') {
                    dateArray.shift()
                    dateArray.unshift('09')
                }
                if(dateArray[0] === 'Oct') {
                    dateArray.shift()
                    dateArray.unshift('10')
                }
                if(dateArray[0] === 'Nov') {
                    dateArray.shift()
                    dateArray.unshift('11')
                }
                if(dateArray[0] === 'Dec') {
                    dateArray.shift()
                    dateArray.unshift('12')
                }
                let shiftArray = [dateArray[0], dateArray[1]] = [dateArray[1], dateArray[0]]
                shiftArray.push(dateArray[2])
                return shiftArray.reverse().join('-')
}

module.exports = { dateFormat };