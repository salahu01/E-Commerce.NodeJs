import express from "express";
import subCategoryController from "../controller/sub_category_controller";
// const auth = require("../middleware/auth_middleware");

const router = express.Router();

router
  // .use(auth)
  .route("/")
  .get(subCategoryController.getAllSubCategories);

router
  // .use(auth)
  .route("/:id")
  .get(subCategoryController.getOneSubCategory);

export = router;
