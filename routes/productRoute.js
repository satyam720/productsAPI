import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";


const route = express.Router();

route.route("/").post(createProduct).get(getProducts);

export default route;
