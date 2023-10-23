const Schema = require('mongoose').Schema;

const itemsSchema = new Schema({
    user: { type: String, required: true },
    email: String,
    PackageItems: [PackageItemsSchema],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number, required:true}
  }, {
    timestamps: true
  });

  module.exports =  itemsSchema)