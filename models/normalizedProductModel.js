import mongoose from "mongoose";



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
  category: {
    type: String,
    required: true,
    enum: [
      "electronics",
      "clothing",
      "books",
      "home_appliances",
      "sports",
      "beauty",
      "food",
    ],
    message: "Please select a valid category",
  },
  subCategory: {
    type: String,
    required: true,
    validate: function(elem) {
        const allowed = categoryMap[this.category];
        return allowed && allowed.includes(elem);
    }
  },
});
