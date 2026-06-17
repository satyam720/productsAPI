import express from 'express';
import morgan from 'morgan';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import subCatRoute from './routes/subCategoryRoute.js';

const app = express();

//setup middleware
app.use(morgan('dev'));
app.use(express.json());

// setup routes
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/subcategory', subCatRoute);
app.use('/api/v1/products', productRoute);

export default app;