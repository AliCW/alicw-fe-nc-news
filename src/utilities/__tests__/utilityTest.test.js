const { capitaliseFirstLetter } = require('../capitaliseFirstLetter')
const { orderByCommentCountDesc, orderByCommentCountAsc } = require('../orderByCommentCount')
const { dateFormat } = require('../dateFormat')

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

describe('checking function', () => { 
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
