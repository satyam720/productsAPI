import express from "express";
import { createProduct } from "../controllers/productController.js";


const route = express.Router();

route.route("/").post(createProduct);

export default route;
