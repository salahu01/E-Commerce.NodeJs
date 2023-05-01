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
const products_model_1 = __importDefault(require("../model/products_model"));
const categarie_model_1 = __importDefault(require("../model/categarie_model"));
const flash_sale_model_1 = __importDefault(require("../model/flash_sale_model"));
const sub_category_model_1 = __importDefault(require("../model/sub_category_model"));
var getAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_model_1.default.find();
        res.json({
            success: true,
            message: "Successfully found products",
            data: products,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
var createOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield products_model_1.default.create(req.body);
        if (req.body.flashsale == "true") {
            const teo = yield flash_sale_model_1.default.find();
            if (teo[0]) {
                teo[0].productIds.push(response._id);
                teo[0].save();
            }
            else {
                yield flash_sale_model_1.default.create({
                    productIds: response._id
                });
            }
        }
        var subCategory = yield sub_category_model_1.default.findOne({
            subCategary: req.body.subCategary,
        });
        if (subCategory) {
            subCategory.productid.push(response._id);
            subCategory.save();
        }
        else {
            subCategory = yield sub_category_model_1.default.create({
                productid: response._id,
                subCategary: response.subCategary,
            });
        }
        const category = yield categarie_model_1.default.findOne({
            categary: req.body.categary,
        });
        if (category) {
            const subCategoryItem = category.subCategoryIds.includes(subCategory.id);
            if (!subCategoryItem) {
                category.subCategoryIds.push(subCategory.id);
                category.save();
            }
        }
        else {
            yield categarie_model_1.default.create({
                subCategoryIds: subCategory._id,
                categary: response.categary,
            });
        }
        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            data: [],
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
    }
});
var getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        const product = yield products_model_1.default.findOne({ _id });
        res.status(200).send({
            success: true,
            message: 'Successfully found product',
            data: product,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
    }
});
var patchOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        const product = yield products_model_1.default.updateOne({ _id }, { $set: req.body });
        res.status(200).send({
            success: true,
            message: 'Successfully product updated',
            data: product,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
    }
});
var deleteOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        const product = yield products_model_1.default.deleteOne({ _id });
        res.status(204).send({
            success: true,
            message: 'Successfully product deleted',
            data: product,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
    }
});
module.exports = { getAllProducts, createOneProduct, getOneProduct, patchOneProduct, deleteOneProduct };
