require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Marketing Package', sortOrder: 10},
    {name: 'Marketing Ala-Carte', sortOrder: 20},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bronze Package', image:'', category: categories[0], price: 200.00},
    {name: 'Silver Package', image: '', category: categories[0], price: 400.00},
    {name: 'Gold Package', image: '', category: categories[0], price: 600.00},
    {name: 'Logo', image: '', category: categories[1], price: 75.00},
    {name: 'Banner', emoji: '', category: categories[1], price: 75.00},
    {name: 'Digital Flyer', image: '', category: categories[1], price: 100.00},
    {name: 'Digital Business Card', image: '', category: categories[1], price: 50.00},
    {name: 'Social Media Set-Up', image: '', category: categories[1], price: 50.00},
  ]);

  console.log(items)

  process.exit();
})();