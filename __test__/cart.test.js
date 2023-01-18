const totalCart = require('../js/cart')

test('calculates total of cart', () => {
    const cart = [{quantity: 2, price: 5}, {quantity: 1, price: 10}];
    expect(totalCart()).toEqual(20);
});