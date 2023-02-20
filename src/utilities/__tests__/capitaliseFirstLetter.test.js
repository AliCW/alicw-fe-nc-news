const { capitaliseFirstLetter } = require('../capitaliseFirstLetter')

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

