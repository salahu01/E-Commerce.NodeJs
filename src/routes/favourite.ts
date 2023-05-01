import express from "express";
import favouriteController from "../controller/favourite_controller";
import auth from "../middleware/auth_middleware";

const router = express.Router();

router
  .use(auth)
  .route("/:id")
  .get(favouriteController.getOne)
  .post(favouriteController.addOne);

export = router;
