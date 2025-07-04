import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';  // <-- import your Mongoose model

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find(); // Mongoose query
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id); // MongoDB _id query

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
