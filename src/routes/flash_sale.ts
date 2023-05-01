import express from "express";
import categoryController from "../controller/flash_sale_controller";
// const auth = require("../middleware/auth_middleware");

const router = express.Router();

router
  // .use(auth)
  .route("/")
  .get(categoryController.getAllFalshProducts);

router
  // .use(auth)
  .route("/:id")
  .get(categoryController.getOneFlashProduct);

export = router;
