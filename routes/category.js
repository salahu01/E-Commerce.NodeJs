const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category_controller");
// const auth = require("../middleware/auth_middleware");

router
  // .use(auth)
  .route("/")
  .get(categoryController.getAllCategories);

router
  // .use(auth)
  .route("/:id")
  .get(categoryController.getOneCategory);

module.exports = router;
