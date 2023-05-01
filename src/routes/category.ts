import express from "express";
import categoryController from "../controller/category_controller";
// const auth = require("../middleware/auth_middleware");

const router = express.Router();

router
  // .use(auth)
  .route("/")
  .get(categoryController.getAllCategories);

router
  // .use(auth)
  .route("/:id")
  .get(categoryController.getOneCategory);

export = router;
