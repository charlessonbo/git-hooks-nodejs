const mult = require('../src/mult')

it('shoul return correct mult', () => {
    const result = mult(2, 3)
    expect(result).toBe(6)
})