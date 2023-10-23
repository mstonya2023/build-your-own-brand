const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageItemsSchema = new Schema ({
    qty: { type: Number, default: 1},
}, { 
    timestamp: true 
})



const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    PackageItems: [PackageItemsSchema],
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Order', orderSchema)