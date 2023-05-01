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
const favourite_model_1 = __importDefault(require("../model/favourite_model"));
var getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        if (_id) {
            const favourite = yield favourite_model_1.default.findOne({ _id });
            if (favourite) {
                res.status(200).json({
                    success: true,
                    message: "Successfully found favourite products",
                    data: favourite,
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't found favourite products",
                    data: [],
                });
            }
        }
        else {
            res.status(400).json({
                success: false,
                message: "Pass currect data !",
                data: [],
            });
        }
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
var addOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params.id);
        if (_id) {
            const favourite = yield favourite_model_1.default.findOne({ _id });
            if (favourite) {
                favourite.productIds.push(req.body.productId);
                favourite.save();
            }
            else {
                yield favourite_model_1.default.create({
                    productIds: req.body.productId,
                    _id: _id,
                });
            }
            res.status(201).send({
                success: true,
                message: `${req.body}\n product is successfully added`,
                data: [],
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "Pass currect data !",
                data: [],
            });
        }
    }
    catch (error) {
        res.status(400).send(error.errors);
        error;
    }
});
module.exports = { getOne, addOne };
