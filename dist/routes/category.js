"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("../controller/category_controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(category_controller_1.default.getAllCategories);
router
    .route("/:id")
    .get(category_controller_1.default.getOneCategory);
module.exports = router;
