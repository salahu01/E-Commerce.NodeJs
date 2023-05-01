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
const categarie_model_1 = __importDefault(require("../model/categarie_model"));
const getAllCategories = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categarie_model_1.default.find();
        _res.json({
            success: true,
            message: "Successfully found cart categorys",
            data: categories,
        });
    }
    catch (error) {
        _res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
const getOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        const category = yield categarie_model_1.default.findOne({ _id });
        res.json({
            success: true,
            message: "Successfully found cart category",
            data: category,
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
module.exports = { getAllCategories, getOneCategory };
