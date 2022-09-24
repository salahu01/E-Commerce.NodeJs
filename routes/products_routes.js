const express = require("express");
const router = express.Router();
const productController = require("../controller/products_conroller");
// const auth = require("../middleware/auth_middleware");

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

module.exports = router;
