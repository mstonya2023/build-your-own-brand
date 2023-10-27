const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [itemSchema],
    isPaid: { type: Boolean, default: false }
  }, {
    timestamps: true,
    toJSON: { virtuals: true}
  });

  orderSchema.virtual('orderTotal').get(function(){
  return this.orderItems.reduce((total, item) => total + item.ext.Price , 0);
});
  orderSchema.virtual('totalQty').get(function(){
  return this.orderItems.reduce((total, item) => total + item.qty , 0);
});
  orderSchema.virtual('orderId').get(function(){
  return this.id.slice(-6 .toUpperCase());
});
  
// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function(userId) {
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


module.exports = mongoose.model('Order', orderSchema)