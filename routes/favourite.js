const express = require("express");
const router = express.Router();
const favouriteController = require("../controller/favourite_controller");
const auth = require("../middleware/auth_middleware");
router
  .use(auth)
  .route("/:id")
  .get(favouriteController.getOne)
  .post(favouriteController.addOne);

module.exports = router;
