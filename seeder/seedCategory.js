import mongoose from "mongoose";
import Category from "../models/categoryModel.js";
import { configDotenv } from 'dotenv';


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
configDotenv({path: './config.env', encoding: 'UTF-8', debug: true});

const DB = process.env.MONGO_SERVER.replace('<db_password>', process.env.MONGO_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log("connected to DB");
});

async function seed() {
  try {
    
    await Category.deleteMany({});

    await Category.create(categories);

    console.log("Categories seeded");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();