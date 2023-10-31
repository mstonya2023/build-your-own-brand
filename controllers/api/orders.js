const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkoutCart,
    getAllOrders

};

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
    
}

// Add an item to the cart
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id)
    res.json(cart)

}
async function setItemQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty)
    res.json(cart)

}

async function checkoutCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save(); 
    res.json(cart);
  }
async function getAllOrders(req, res) {
    const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
    res.json(orders);
  }