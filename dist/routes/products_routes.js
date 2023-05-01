"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const products_conroller_1 = __importDefault(require("../controller/products_conroller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(products_conroller_1.default.getAllProducts)
    .post(products_conroller_1.default.createOneProduct);
[];
router
    .route("/:id")
    .get(products_conroller_1.default.getOneProduct)
    .patch(products_conroller_1.default.patchOneProduct)
    .delete(products_conroller_1.default.deleteOneProduct);
module.exports = router;
