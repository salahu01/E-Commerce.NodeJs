"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongodb_1 = require("mongodb");
const flash_sale_model_1 = __importDefault(require("../model/flash_sale_model"));
const products_model_1 = __importDefault(require("../model/products_model"));
var getAllFalshProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const flahSaleIds = (_b = (_a = (yield flash_sale_model_1.default.find()).at(0)) === null || _a === void 0 ? void 0 : _a.productIds) !== null && _b !== void 0 ? _b : [];
        console.log(flahSaleIds);
        const allProducts = yield products_model_1.default.find();
        res.json({
            success: true,
            message: "Successfully found flashsale products",
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
var getOneFlashProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        const product = yield flash_sale_model_1.default.findOne({ _id });
        res.json({
            success: true,
            message: "Successfully found flashsale product",
            data: product,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
module.exports = { getAllFalshProducts, getOneFlashProduct };
