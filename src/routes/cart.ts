import express from "express";
const router = express.Router();
import cartController from "../controller/cart_controller";
import auth from "../middleware/auth_middleware";
router
  .use(auth)
  .route("/:id")
  .get(cartController.getOne)
  .post(cartController.addOne);

export = router;
