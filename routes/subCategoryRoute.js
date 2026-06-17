import express from 'express';
import { createSubCategory } from "../controllers/subCategoryController.js";

const subCatRoute = express.Router();

subCatRoute.route('/').post(createSubCategory);

export default subCatRoute;
