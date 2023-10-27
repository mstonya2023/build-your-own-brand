const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function () {
  // 'this' keyword is bound to the lineItem document
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});
orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});
orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function (userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const Item = mongoose.model('Item')
    const item = await Item.findById(itemId)
    cart.lineItems.push({ item })
  }
  return cart.save();


}

orderSchema.methods.setItemQty = function (itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    lineItem.deleteOne()
  } else if (lineItem) {
    lineItem.qty = newQty
  }
  return cart.save();
}



module.exports = mongoose.model('Order', orderSchema)