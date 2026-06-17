import mongoose from "mongoose";
import Category from "./categoryModel.js";
import SubCategory from "./subCategoryModel.js";



const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "product should have a name of at least 3 characters"],
    max: [25, "product name cannot have more than 25 characters"],
  },
  sku: {
    type: String,
    required: [true, "product cannot be processed without sku details"],
    match: [
      /^commerce_product\d+$/,
      "SKU must start with 'commerce_product' followed by numeric characters",
    ],
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }],
  subCategory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
    
  }],
  price: {
    type: Number,
    required: true,
  }
});

productSchema.pre('validate', async function() {
  let subCatIds = this.subCategory;
  let catIds = this.category;
  
  const subCategory = await SubCategory.find({
    _id: {$in: subCatIds}
  })

  const categorySet = new Set(catIds.map(id => id.toString()));
  console.log(categorySet);
  for(const sub of subCategory){
    const isValid = sub.parents.some(id => categorySet.has(id.toString()));

    if (!isValid) {
      throw new Error(
        `${sub.name} does not belong to selected categories`
      );
    }
  }

});

const Product = mongoose.model('Product', productSchema);

export default Product;
