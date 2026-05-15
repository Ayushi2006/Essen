const mongoose = require("mongoose");
const Food = require("./models/Food");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const seedFoods = [
  {
    name: "Margherita Pizza",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fast Food",
  },
  {
    name: "Cheese Burger",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoZWVzZWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Fast Food",
  },
  {
    name: "Veg Pasta Alfredo",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBhbGZyZWRvfGVufDB8fDB8fHww",
    category: "Italian",
  },
  {
    name: "Chicken Biryani",
    price: 260,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    category: "Indian",
  },
  {
    name: "Veg Sandwich",
    price: 90,
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
    category: "Snacks",
  },

  {
    name: "French Fries",
    price: 80,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    category: "Snacks",
  },
  {
    name: "Chicken Wrap",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdyYXB8ZW58MHx8MHx8fDA%3D",
    category: "Fast Food",
  },
  {
    name: "Paneer Tikka",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D",
    category: "Indian",
  },
  {
    name: "Momos",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1700746098867-29b475283b51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Street Food",
  },
  {
    name: "Noodles",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Chinese",
  },

  {
    name: "Fried Rice",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww",
    category: "Chinese",
  },
  {
    name: "Dosa",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "South Indian",
  },
  {
    name: "Idli Sambhar",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWRsaSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "South Indian",
  },
  {
    name: "Butter Chicken",
    price: 280,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    category: "Indian",
  },
  {
    name: "Tandoori Chicken",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww",
    category: "Indian",
  },

  {
    name: "Ice Cream",
    price: 110,
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e",
    category: "Dessert",
  },
  {
    name: "Brownie",
    price: 130,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    category: "Dessert",
  },
  {
    name: "Cupcake",
    price: 90,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce",
    category: "Dessert",
  },
  {
    name: "Chocolate Cake",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Dessert",
  },

  {
    name: "Cold Coffee",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beverages",
  },
  {
    name: "Lemonade",
    price: 60,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghPVU_ZEhFUdz6AlvhYl7Czxb1J33Utwrh9lAL_T_bClQbXhpaEVM0hMvX5I9o-J0fOEU7dfOiztFc4oyEVtrB2HgWfVvsPWo8enGxW5Ims_aT34EeFRhyphenhyphenjoTk24gmFOQ3M3iHIvUNepw/s1600/Homemade-Lemonade-Glass-of-Image+2.JPG",
    category: "Beverages",
  },
  {
    name: "Milkshake",
    price: 120,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "Beverages",
  },
  {
    name: "Green Salad",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
    category: "Healthy",
  },

  {
    name: "Grilled Chicken",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
    category: "Protein",
  },
  {
    name: "Veg Burger",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZyUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Fast Food",
  },
  {
    name: "Hot Dog",
    price: 440,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3VCNUZ-2eCRz4Jyijqy1jCBxgc56jwSKx91gotRt5QhD8EsHIbjLwyY&s",
    category: "Fast Food",
  },
  {
    name: "Pav Bhaji",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1606491956391-70868b5d0f47?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Street Food",
  },
  {
    name: "Chole Bhature",
    price: 150,
    image:
      "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pmBVIcNb-GIFnsBT0sYqfy-YtzNq7pOqc6lQZgFOPo=",
    category: "Indian",
  },

  {
    name: "Corn Dog",
    price: 319,
    image:
      "https://plus.unsplash.com/premium_photo-1664478260612-7c3c685d0998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ybiUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Snacks",
  },
  {
    name: "Fish and Chips",
    price: 459,
    image:
      "https://plus.unsplash.com/premium_photo-1694108747175-889fdc786003?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGFuZCUyMGNoaXBzfGVufDB8fDB8fHww",
    category: "Snacks",
  },
  {
    name: "Chai",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Indian Beverages",
  },

  {
    name: "Sushi Platter",
    category: "Japanese",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Ramen Bowl",
    category: "Japanese",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Tempura",
    category: "Japanese",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1677743537607-f7fc9273ec4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcHVyYXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    name: "Matcha Latte",
    category: "Japanese Beverage",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Mochi",
    category: "Japanese Dessert",
    price: 299,
    image:
      "https://plus.unsplash.com/premium_photo-1700590072727-c98504929014?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9jaGl8ZW58MHx8MHx8fDA%3D",
  },


  {
    name: "Bratwurst",
    category: "German",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1591989330748-777649e84466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhdHd1cnN0fGVufDB8fDB8fHww",
  },

  {
    name: "Pretzel",
    category: "German Snack",
    price: 199,
    image:
      "https://plus.unsplash.com/premium_photo-1671455916389-0964887400b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJldHplbHxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    name: "Schnitzel",
    category: "German",
    price: 499,
    image:
      "https://media.istockphoto.com/id/1329294505/photo/delicious-original-schnitzel.webp?a=1&b=1&s=612x612&w=0&k=20&c=8FESHY6-IJAxc6F8VuVh5ztc6pXyWw6KNQR08cDlGPU=",
  },

  {
    name: "Black Forest Cake",
    category: "German Dessert",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Apple Strudel",
    category: "German Dessert",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1657313938000-23c4322dbe22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBzdHJ1ZGVsfGVufDB8fDB8fHww",
  },

  {
    name: "Croissant",
    category: "French Bakery",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jvc3NhaW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    name: "Macarons",
    category: "French Dessert",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "French Onion Soup",
    category: "French",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1549203438-a7696aed4dac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwb25pb24lMjBzb3VwfGVufDB8fDB8fHww",
  },

  {
    name: "Crème Brûlée",
    category: "French Dessert",
    price: 349,
    image:
      "https://www.recipetineats.com/tachyon/2016/09/Creme-Brulee_8-SQ.jpg",
  },

  {
    name: "Café Mocha",
    category: "French Beverage",
    price: 249,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoQTueGUDXOdy5ET04Eg03HH6NI0m1LcYeg&s",
  },

  {
    name: "Tacos",
    category: "Mexican",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Nachos",
    category: "Mexican Snack",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFjaG9zfGVufDB8fDB8fHww",
  },

  {
    name: "Burrito",
    category: "Mexican",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1629450748686-c86699b710ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cnJpdG98ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "Churros",
    category: "Mexican Dessert",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1615915848347-5ad361d3e9fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cnJvc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    name: "Horchata",
    category: "Mexican Beverage",
    price: 199,
    image:
      "https://cdn.prod.website-files.com/60d6397f0cb19864bd8fa58e/619343ab7ffcdf5961c3ea5d_Mexican%20Horchata.jpg",
  },
];

const seedDB = async () => {
  await Food.deleteMany();
  await Food.insertMany(seedFoods);
  console.log("Database Seeded 🚀");
  mongoose.connection.close();
};

seedDB();
