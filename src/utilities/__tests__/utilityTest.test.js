const { capitaliseFirstLetter } = require('../capitaliseFirstLetter')
const { orderByCommentCountDesc, orderByCommentCountAsc } = require('../orderByCommentCount')
const { dateFormat } = require('../dateFormat')
const { checkValidPassword } = require('../checkValidPassword')
const { checkValidUsername } = require('../checkValidUsername')
const { checkValidName } = require('../checkValidName')
const { checkValidLink } = require('../checkValidLink')

const dummyCommentObject = {
    "articles": [
        {
            "author": "grumpy19",
            "title": "The Notorious MSG’s Unlikely Formula For Success",
            "article_id": 34,
            "topic": "cooking",
            "created_at": "2020-11-22T11:13:00.000Z",
            "votes": 12,
            "comments_count": "11"
        },
        {
            "author": "tickle122",
            "title": "The battle for Node.js security has only begun",
            "article_id": 12,
            "topic": "coding",
            "created_at": "2020-11-15T13:25:00.000Z",
            "votes": 0,
            "comments_count": "7"
        },
        {
            "author": "grumpy19",
            "title": "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
            "article_id": 6,
            "topic": "coding",
            "created_at": "2020-11-11T15:09:00.000Z",
            "votes": 0,
            "comments_count": "10"
        },
        {
            "author": "jessjelly",
            "title": "Running a Node App",
            "article_id": 1,
            "topic": "coding",
            "created_at": "2020-11-07T06:03:00.000Z",
            "votes": 0,
            "comments_count": "8"
        },
        {
            "author": "tickle122",
            "title": "Agility Training Drills For Football Players",
            "article_id": 21,
            "topic": "football",
            "created_at": "2020-10-26T10:05:00.000Z",
            "votes": 0,
            "comments_count": "9"
        },
    ]
}

describe('Checking functionality for capitalising the first letter of a string' , () => {
    test('Passed an empty string & returns an empty string', () => {
        const dummy = ''
        expect(capitaliseFirstLetter(dummy)).toBe('')
    })
    test('Passed an a string & returns a string with the first letter capitalised', () => {
        const dummy = 'dummy'
        expect(capitaliseFirstLetter(dummy)).toBe('Dummy')
    })
})

describe('checking functionality for sorting comment objects in ascending order', () => {
    test('returns an array of objects when given an array of objects', () => {
        const checkResult = orderByCommentCountAsc(dummyCommentObject.articles)
        checkResult.map((object) => {
            expect(object).toBeInstanceOf(Object)
        })
    })
    test('checks the comments are in ascending order', () => {
        const checkResult = orderByCommentCountAsc(dummyCommentObject.articles)
        let commentsArray = []
        checkResult.forEach((object) => {
            commentsArray.push(Number(object.comments_count))
        })
        expect(commentsArray).toBeSorted();
    })
    test('checks the comments are in descending order', () => {
        const checkResult = orderByCommentCountDesc(dummyCommentObject.articles)
        let commentsArray = []
        checkResult.forEach((object) => {
            commentsArray.push(Number(object.comments_count))
        })
        expect(commentsArray.reverse()).toBeSorted();
    })
})

describe('Date function checks, function must convert months into numerical values and list in year-month-day format - e.g 2020-01-14', () => { 
    test('Given a date string, return a string', () => {
        const data = 'May 15 2016'
        expect(typeof dateFormat(data)).toBe('string')
    })
    test('Given a date string, return the a length of 10', () => {
        const data = 'Jan 04 2020'
        expect(dateFormat(data)).toHaveLength(10)
    })
    test('Given a date string, return the data formatted numerically in year-month-day format', () => {
        const data = 'Feb 22 2023'
        expect(dateFormat(data)).toBe('2023-02-22')
    })
})

describe('Password validity checks - password must be between 8 & 40 characters long with one of each: uppercase, lowercase, number & symbol', () => {
    test('Checks the given password is over 8 characters - false response', () => {
        const password = "l.Ar0"
        expect(checkValidPassword(password)).toBe(false)
    })
    test('Checks the given password is over 8 characters - true response', () => {
        const password = "l.Armstr0ng"
        expect(checkValidPassword(password)).toBe(true)
    }) 
    test('Checks the given password is under 40 characters - false response', () => {
        const password = "l.Armstr0ngl.Armstr0ngl.Armstr0ngl.Armstr0ngl.Armstr0ngl.Armstr0ngl"
        expect(checkValidPassword(password)).toBe(false)
    }) 
    test('Checks the given password contains at least one uppercase character - false response', () => {
        const password = "l.armstr0ng"
        expect(checkValidPassword(password)).toBe(false)
    })
    test('Checks the given password contains at least one uppercase character - true response', () => {
        const password = "l.Armstr0ng"
        expect(checkValidPassword(password)).toBe(true)
    })
    test('Checks the given password contains at least one lowercase character - false response', () => {
        const password = "L.ARMSTR0NG"
        expect(checkValidPassword(password)).toBe(false)
    })
    test('Checks the given password contains at least one lowercase character - true response', () => {
        const password = "l.Armstr0ng"
        expect(checkValidPassword(password)).toBe(true)
    })
    test('Checks the given password contains at least one Number - false response', () => {
        const password = "l.Armstrong"
        expect(checkValidPassword(password)).toBe(false)
    })
    test('Checks the given password contains at least one Number - true response', () => {
        const password = "l.Armstr0ng"
        expect(checkValidPassword(password)).toBe(true)
    })
    test('Checks the given password contains at least special character - false response', () => {
        const password = "loArmstr0ng"
        expect(checkValidPassword(password)).toBe(false)
    })
    test('Checks the given password contains at least special character - true response', () => {
        const password = "l.Armstr0ng"
        expect(checkValidPassword(password)).toBe(true)
    })
    test('Checks the presence of acceptable symbols: ! £ | - + , = * . ? # ; _ $ % ^ true response', () => {
        const password = "!.,=-+£|Ar0m*s?#/;"
        expect(checkValidPassword(password)).toBe(true)
    })
})

describe('Username validity checks - username must be between 5 & 20 characters in length & must contain 3 letters at least', () => {
    test('Checks the length of the username provided - short name - false response', () => {
        const username = "jim"
        expect(checkValidUsername(username)).toBe(false)
    })
    test('Checks the length of the username provided - long name - false response', () => {
        const username = "I'm_Chris_Hansen_with_Dateline_NBC"
        expect(checkValidUsername(username)).toBe(false)
    })
    test('Checks the length of the username provided - true response', () => {
        const username = "chris_hansen"
        expect(checkValidUsername(username)).toBe(true)
    })
    test('Checks the username contains at least 3 letters - false response', () => {
        const username = "123456789ab"
        expect(checkValidUsername(username)).toBe(false)
    })
    test('Checks the username contains at least 3 letters - true response', () => {
        const username = "Chris_Hansen-123"
        expect(checkValidUsername(username)).toBe(true)
    })
})

describe('Name validity checks - name provided must be between 4 & 50 characters long with no symbols, numbers or double spaces', () => {
    test('Checks the name is over 3 characters long - false response', () => {
        const name = "Hi"
        expect(checkValidName(name)).toBe(false)
    })
    test('Checks the name is under 50 characters long - false response', () => {
        const name = "fiverfiverfiverfiverfiverfiverfiverfiverfiverfiverfiverfiverfiverfiver"
        expect(checkValidName(name)).toBe(false)
    })
    test('Checks the name is over 3 characters long - true response', () => {
        const name = "desserpeDyllaeRmI"
        expect(checkValidName(name)).toBe(true)
    })
    test('Checks the name has no numbers - false response', () => {
        const name = "77yppahnu77"
        expect(checkValidName(name)).toBe(false)
    })
    test('Checks the name has no numbers - true response', () => {
        const name = "ssendas"
        expect(checkValidName(name)).toBe(true)
    })
    test('Checks the name has no symbols - false response', () => {
        const name = "~@}{%*&£>.,`?"
        expect(checkValidName(name)).toBe(false)
    })
    test('Checks the name has no double spaces - false response', () => {
        const name = "em  pleh"
        expect(checkValidName(name)).toBe(false)
    })
    test('Checks the name has no double spaces - true response', () => {
        const name = "em pleh"
        expect(checkValidName(name)).toBe(true)
    })
})

describe('URL validity check - URL must begin with "http://" or "https://" & contains atleast one "."', () => {
    test('Checks the URL contains at least one "." - false test', () => {
        const URL = 'http://stuff&stuff,com'
        expect(checkValidLink(URL)).toBe(false)
    })
    test('Checks the URL contains at least one "." - false test', () => {
        const URL = 'http://stuff&stuff.com'
        expect(checkValidLink(URL)).toBe(true)
    })
    test('Checks the URL begins with "http://" or "https://" - false test', () => {
        const URL = 'htttp://stuff&stuff.com'
        expect(checkValidLink(URL)).toBe(false)
    })
    test('Checks the URL begins with "http://" - true test', () => {
        const URL = 'http://stuff&stuff.com'
        expect(checkValidLink(URL)).toBe(true)
    })
    test('Checks the URL begins with "https://" - true test', () => {
        const URL = 'https://stuff&stuff.com'
        expect(checkValidLink(URL)).toBe(true)
    })
})