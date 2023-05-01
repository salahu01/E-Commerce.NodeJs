import { ObjectId } from "mongodb";
import products_model from "../model/products_model";
import categories_model from "../model/categarie_model";
import flash_sale_model from "../model/flash_sale_model";
import sub_categories_model from "../model/sub_category_model";

var getAllProducts = async (_req: any, res: any) => {
  try {
    const products = await products_model.find();
    res.json({
      success: true,
      message: "Successfully found products",
      data: products,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
};

var createOneProduct = async (req: any, res: any) => {
  try {
    const response = await products_model.create(req.body);
    if (req.body.flashsale == "true") {
      const teo = await flash_sale_model.find();
      if (teo[0]) {
        teo[0].productIds.push(response._id);
        teo[0].save();
      } else {
        await flash_sale_model.create({
          productIds: response._id
        });
      }
    }
    var subCategory = await sub_categories_model.findOne({
      subCategary: req.body.subCategary,
    });
    if (subCategory) {
      subCategory.productid.push(response._id);
      subCategory.save();
    }
    else {
      subCategory = await sub_categories_model.create({
        productid: response._id,
        subCategary: response.subCategary,
      });
    }
    const category = await categories_model.findOne({
      categary: req.body.categary,
    });
    if (category) {
      const subCategoryItem = category.subCategoryIds.includes(subCategory.id);
      if (!subCategoryItem) {
        category.subCategoryIds.push(subCategory.id);
        category.save();
      }
    } else {
      await categories_model.create({
        subCategoryIds: subCategory._id,
        categary: response.categary,
      });
    }
    res.status(201).send({
      success: true,
      message: 'Product created successfully',
      data: [],
    });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

var getOneProduct = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    const product = await products_model.findOne({ _id });
    res.status(200).send({
      success: true,
      message: 'Successfully found product',
      data: product,
    });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

var patchOneProduct = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    const product = await products_model.updateOne({ _id }, { $set: req.body });
    res.status(200).send({
      success: true,
      message: 'Successfully product updated',
      data: product,
    });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

var deleteOneProduct = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    const product = await products_model.deleteOne({ _id });
    res.status(204).send({
      success: true,
      message: 'Successfully product deleted',
      data: product,
    });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

export = { getAllProducts, createOneProduct, getOneProduct, patchOneProduct, deleteOneProduct }