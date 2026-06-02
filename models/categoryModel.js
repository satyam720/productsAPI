import mongoose from "mongoose";
import slugify from "slugify";

const categories = [
  "electronics",
  "clothing",
  "books",
  "home_appliances",
  "sports",
  "beauty",
  "food",
];

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: {
        values: categories,
        message: `Category can only be following values ${categories.join(" ")}`,
      },
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
    },
    aliases: [
      {
        type: String,
        trim: true
      },
    ],
    description: {
        type: String,
        trim: true
    },
  },
  { timestamps: true },
);

categorySchema.pre("validate", function() {
  this.slug = slugify(this.name, { lower: true });
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
