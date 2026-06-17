import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";

class APIFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    async filter(){
        const queryObj = {...this.queryString};
        let excludedFields = ["page", "limit", "sort", "fields"];
        excludedFields.forEach(el => delete queryObj[el]);
        
        const categories = queryObj['category']?.split(',') || [];
        const subCategories = queryObj['subCategory']?.split(',') || [];
        
        const category = await Category.find({
            name: {$in: categories}
        });

        const subCategory = await SubCategory.find({
            name: {$in: subCategories}
        });

        const catIds = category.map(cat => cat.id.toString());
        const subCatIds = subCategory.map(subCat => subCat.id.toString());

        const filter = {};

        if(catIds.length > 0){
            filter.category = {
                $in: catIds
            }
        }

        if(subCatIds.length > 0){
            filter.subCategory = {
                $in: subCatIds
            }
        }

        if(this.queryString.price){
            filter.price = {
                $lte: this.queryString.price
            }
        }


        this.query = this.query.find(filter);

        return this;
    }

    async limitFields() {
        let limitFields = '-__v';
        if(this.queryString.fields){
            limitFields = this.queryString.fields.split(',').join(' ');
        }

        this.query = this.query.select(limitFields);

        return this;

    }
}

export default APIFeatures;