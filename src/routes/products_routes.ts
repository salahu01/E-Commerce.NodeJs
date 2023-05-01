import express from "express";
import productController from "../controller/products_conroller";
// const auth = require("../middleware/auth_middleware");

const router = express.Router();

router
  // .use(auth)
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createOneProduct);[]

router
  // .use(auth)
  .route("/:id")
  .get(productController.getOneProduct)
  .patch(productController.patchOneProduct)
  .delete(productController.deleteOneProduct);

export = router;
