const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    packageItems: [packageItemsSchema],
    isPaid: { type: Boolean, default: false }
  }, {
    timestamps: true
  });

  orderSchema.virtual('orderTotal').get(function(){
  return this.packageItems.reduce((total, item) => total + item.ext.Price , 0);
});
  orderSchema.virtual('totalQty').get(function(){
  return this.packageItems.reduce((total, item) => total + item.qty , 0);
});
  orderSchema.virtual('orderId').get(function(){
  return this.id.slice(-6 .toUpperCase());
});
  module.exports = mongoose.model('Order', orderSchema)