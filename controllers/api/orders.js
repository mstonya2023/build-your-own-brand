const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,

};

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);

}

// Add an item to the cart
async function addToCart(req, res) {

}
