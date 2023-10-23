const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const PackageItemSchema = new Schema({
    // Set qty to 1 when new item pushed into PackageItems
    qty: { type: Number, default: 1 },
    item: itemSchema
  }, {
    timestamps: true
  });
  
const orderSchema = new Schema({
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // Makes sense to embed an order's line items
    PackageItems: [PackageItemSchema],
    // A user's unpaid order is their "cart"
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true
  });