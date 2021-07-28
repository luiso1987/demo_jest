const { sumar } = require('../helpers/operations');


test('adds 1 + 2 to equal 3', () => {
    expect(sumar(1, 2)).toBe(3);
});