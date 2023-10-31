const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET/api/items
router.get('/cart', ordersCtrl.cart);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/qty', ordersCtrl.setItemQtyInCart);
router.post('/cart/checkout', ordersCtrl.checkoutCart);
router.get('/', ordersCtrl.getAllOrders);
// GET/api/items/:id
module.exports = router;