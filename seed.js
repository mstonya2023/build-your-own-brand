require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const category = await Category.create([
    {name: 'Marketing Package', sortOrder: 10},
    {name: 'Marketing Ala-Carte', sortOrder: 20},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bronze Package', image:'https://i.imgur.com/EJo7coX.png', description:'Logo, Banner, Landing Page, Digital Business Card', 
    category: category[0], price: 200.00},
    {name: 'Silver Package', image: 'https://i.imgur.com/k97taDX.png', description:'Logo, Banner, Landing Page, Contact Page, Digital Business Card,',
    category: category[0], price: 400.00},
    {name: 'Gold Package', image: 'https://i.imgur.com/JM4AyD6.png', description:'Logo, Banner, Full Website, Digital Flyer, Digital Business, Social-Media Promo',
    category: category[0], price: 600.00},
    {name: 'Logo', image: 'https://i.imgur.com/K8p4zEI.png', description:"custom to your brand",category: category[1], price: 75.00},
    {name: 'Banner', image: 'https://i.imgur.com/qzW19RZ.jpg', description:"custom to your brand",category: category[1], price: 75.00},
    {name: 'Digital Flyer', image: 'https://i.imgur.com/JAreFWj.png', description:"custom to your brand",category: category[1], price: 100.00},
    {name: 'Digital Business Card', image: 'https://i.imgur.com/D7ifGW9.png', description:"custom to your brand",category: category[1], price: 50.00},
    {name: 'Social Media Promo', image: 'https://i.imgur.com/JrFZmCa.png', description:"custom to your brand",category: category[1], price: 50.00},
  ]);

  console.log(items)

  process.exit();
})();