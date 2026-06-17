import Product from "../models/normalizedProductModel.js";
import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";
import APIFeatures from "../Utils/APIFeatures.js";

const createProduct = async (req, res) => {
  try {
   
    let category = await Category.find({
      name: { $in: req.body.category },
    });

    let subCategory = await SubCategory.find({
      name: { $in: req.body.subCategory },
    });

    // const product = await Product.create(req.body);
    req.body.category = category.map((cat) => cat._id);
    req.body.subCategory = subCategory.map((cat) => cat.id);

    const product = await Product.create(req.body);
    res.status(200).json({
      message: "succes",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const features = new APIFeatures(Product.find(), req.query);
    await features.filter();
    await features.limitFields();
    const products = await features.query;


    res.status(200).json({
      status: "succes",
      data:{
        length: products.length,
        products
      }
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      stack: error.stack
    });
  }
}

export { createProduct, getProducts };
