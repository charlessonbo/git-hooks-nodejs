const sum = require('../src/sum')

it('shoul return correct sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})