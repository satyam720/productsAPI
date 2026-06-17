import mongoose from "mongoose";
import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";
import { configDotenv } from 'dotenv';
import Product from "../models/normalizedProductModel.js";


const categories = [
  {
    "name": "electronics",
    "aliases": ["gadgets", "electronic-devices"],
    "description": "Electronic devices, gadgets, accessories, and related products."
  },
  {
    "name": "clothing",
    "aliases": ["apparel", "fashion"],
    "description": "Men's, women's, and children's clothing and fashion items."
  },
  {
    "name": "books",
    "aliases": ["literature", "reading-material"],
    "description": "Physical books, novels, educational materials, and publications."
  },
  {
    "name": "home_appliances",
    "aliases": ["home-equipment", "household-appliances"],
    "description": "Appliances and equipment used in homes and kitchens."
  },
  {
    "name": "sports",
    "aliases": ["fitness", "athletics"],
    "description": "Sports equipment, fitness gear, and outdoor activity products."
  },
  {
    "name": "beauty",
    "aliases": ["cosmetics", "personal-care"],
    "description": "Beauty, skincare, grooming, and cosmetic products."
  },
  {
    "name": "food",
    "aliases": ["groceries", "edibles"],
    "description": "Food items, groceries, beverages, and consumable products."
  }
]

const subCategories =[
  {
    "name": "Mobile Phones",
    "parents": ["6a1eacbfa12521c489ed7751"]
  },
  {
    "name": "Laptops",
    "parents": ["6a1eacbfa12521c489ed7751"]
  },
  {
    "name": "Accessories",
    "parents": [
      "6a1eacbfa12521c489ed7751",
      "6a1eacbfa12521c489ed7752"
    ]
  },
  {
    "name": "Wearables",
    "parents": [
      "6a1eacbfa12521c489ed7751",
      "6a1eacbfa12521c489ed7755"
    ]
  },
  {
    "name": "Men's Clothing",
    "parents": ["6a1eacbfa12521c489ed7752"]
  },
  {
    "name": "Women's Clothing",
    "parents": ["6a1eacbfa12521c489ed7752"]
  },
  {
    "name": "Footwear",
    "parents": [
      "6a1eacbfa12521c489ed7752",
      "6a1eacbfa12521c489ed7755"
    ]
  },
  {
    "name": "Activewear",
    "parents": [
      "6a1eacbfa12521c489ed7752",
      "6a1eacbfa12521c489ed7755"
    ]
  },
  {
    "name": "Fitness Equipment",
    "parents": ["6a1eacbfa12521c489ed7755"]
  },
  {
    "name": "Outdoor Gear",
    "parents": ["6a1eacbfa12521c489ed7755"]
  },
  {
    "name": "Skincare",
    "parents": ["6a1eacbfa12521c489ed7756"]
  },
  {
    "name": "Cosmetics",
    "parents": ["6a1eacbfa12521c489ed7756"]
  },
  {
    "name": "Personal Care",
    "parents": [
      "6a1eacbfa12521c489ed7756",
      "6a1eacbfa12521c489ed7757"
    ]
  },
  {
    "name": "Snacks",
    "parents": ["6a1eacbfa12521c489ed7757"]
  },
  {
    "name": "Beverages",
    "parents": ["6a1eacbfa12521c489ed7757"]
  },
  {
    "name": "Organic Products",
    "parents": [
      "6a1eacbfa12521c489ed7757",
      "6a1eacbfa12521c489ed7756"
    ]
  },
  {
    "name": "Fiction",
    "parents": ["6a1eacbfa12521c489ed7753"]
  },
  {
    "name": "Educational Books",
    "parents": ["6a1eacbfa12521c489ed7753"]
  },
  {
    "name": "Self Help",
    "parents": ["6a1eacbfa12521c489ed7753"]
  },
  {
    "name": "Kitchen Appliances",
    "parents": ["6a1eacbfa12521c489ed7754"]
  },
  {
    "name": "Refrigerators",
    "parents": ["6a1eacbfa12521c489ed7754"]
  },
  {
    "name": "Home Cleaning",
    "parents": [
      "6a1eacbfa12521c489ed7754",
      "6a1eacbfa12521c489ed7756"
    ]
  },
  {
    "name": "Smart Home",
    "parents": [
      "6a1eacbfa12521c489ed7754",
      "6a1eacbfa12521c489ed7751"
    ]
  }
]

const products = [
  {
    "name": "iPhone 15",
    "sku": "commerce_product1001",
    "category": ["electronics"],
    "subCategory": ["Mobile Phones"],
    "price": 98000
  },
  {
    "name": "MacBook Air M3",
    "sku": "commerce_product1002",
    "category": ["electronics"],
    "subCategory": ["Laptops"],
    "price": 78000
  },
  {
    "name": "Apple Watch Series 10",
    "sku": "commerce_product1003",
    "category": ["electronics", "sports"],
    "subCategory": ["Wearables"],
    "price": 56000
  },
  {
    "name": "Samsung Galaxy S25",
    "sku": "commerce_product1004",
    "category": ["electronics"],
    "subCategory": ["Mobile Phones"],
    "price": 88000
  },
  {
    "name": "Sony WH-1000XM6",
    "sku": "commerce_product1005",
    "category": ["electronics", "clothing"],
    "subCategory": ["Accessories"],
    "price": 30000
  },
  {
    "name": "Levis Slim Fit Jeans",
    "sku": "commerce_product1006",
    "category": ["clothing"],
    "subCategory": ["Men's Clothing"],
    "price": 2500
  },
  {
    "name": "Nike Dri Fit Tee",
    "sku": "commerce_product1007",
    "category": ["clothing", "sports"],
    "subCategory": ["Activewear"],
    "price": 3000
  },
  {
    "name": "Adidas Track Jacket",
    "sku": "commerce_product1008",
    "category": ["clothing", "sports"],
    "subCategory": ["Activewear"],
    "price": 3000
  },
  {
    "name": "Zara Summer Dress",
    "sku": "commerce_product1009",
    "category": ["clothing"],
    "subCategory": ["Women's Clothing"],
    "price": 4000
  },
  {
    "name": "Nike Air Zoom Pegasus",
    "sku": "commerce_product1010",
    "category": ["sports", "clothing"],
    "subCategory": ["Footwear"],
    "price": 10000
  },
  {
    "name": "Adjustable Dumbbell Set",
    "sku": "commerce_product1011",
    "category": ["sports"],
    "subCategory": ["Fitness Equipment"],
    "price": 2500
  },
  {
    "name": "Camping Backpack",
    "sku": "commerce_product1012",
    "category": ["sports"],
    "subCategory": ["Outdoor Gear"],
    "price": 2500
  },
  {
    "name": "Cetaphil Cleanser",
    "sku": "commerce_product1013",
    "category": ["beauty"],
    "subCategory": ["Skincare"],
    "price": 300
  },
  {
    "name": "Maybelline Foundation",
    "sku": "commerce_product1014",
    "category": ["beauty"],
    "subCategory": ["Cosmetics"],
    "price": 600
  },
  {
    "name": "Organic Face Wash",
    "sku": "commerce_product1015",
    "category": ["beauty", "food"],
    "subCategory": ["Organic Products"],
    "price": 300
  },
  {
    "name": "Whey Protein Chocolate",
    "sku": "commerce_product1016",
    "category": ["food", "sports"],
    "subCategory": ["Beverages"],
    "price": 2700
  },
  {
    "name": "Mixed Nuts Pack",
    "sku": "commerce_product1017",
    "category": ["food"],
    "subCategory": ["Snacks"],
    "price": 250
  },
  {
    "name": "Atomic Habits",
    "sku": "commerce_product1018",
    "category": ["books"],
    "subCategory": ["Self Help"],
    "price": 450
  },
  {
    "name": "Clean Code",
    "sku": "commerce_product1019",
    "category": ["books"],
    "subCategory": ["Educational Books"],
    "price": 600
  },
  {
    "name": "Samsung Smart Refrigerator",
    "sku": "commerce_product1020",
    "category": ["electronics", "home_appliances"],
    "subCategory": ["Smart Home"],
    "price": 15000
  }
]

configDotenv({path: './config.env', encoding: 'UTF-8', debug: true});

const DB = process.env.MONGO_SERVER.replace('<db_password>', process.env.MONGO_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log("connected to DB");
});

async function seed() {
  try {
    
    for (const product of products) {
      const categories = await Category.find({
        name: { $in: product.category }
      });

      const subCategories = await SubCategory.find({
        name: { $in: product.subCategory }
      });

      product.category = categories.map(c => c._id);
      product.subCategory = subCategories.map(sc => sc._id);
    }
    await Product.deleteMany({});

    await Product.create(products);

    console.log("products seeded");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();