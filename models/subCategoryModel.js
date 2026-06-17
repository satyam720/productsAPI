import mongoose from "mongoose";
import slugify from 'slugify';

const subCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
},
{timestamps: true});

subCategorySchema.pre('validate', function() {
  this.slug = slugify(this.name, { lower: true});
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema);


export default SubCategory;
