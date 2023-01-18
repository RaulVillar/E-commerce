function totalCart(cart) {
    var total = 0;
    if (cart !== null) {
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity * cart[i].price;
        }
    }
    return total;
};

module.exports = totalCart;