const { Link } = require('react-router-dom');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  description: String,
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;