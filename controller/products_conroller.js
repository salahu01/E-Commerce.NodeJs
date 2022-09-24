const { ObjectId } = require("mongodb");
const products_model = require("../model/products_model");
const categories_model = require("../model/categarie_model");
const flash_sale_model = require("../model/flash_sale_model");
const sub_categories_model = require("../model/sub_category_model");

exports.getAllProducts = async (req, res) => {
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

exports.createOneProduct = async (req, res) => {
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
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    const product = await products_model.findOne({ _id });
    res.status(200).send({
      success: true,
      message: 'Successfully found product',
      data: product,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }

};

exports.patchOneProduct = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    await products_model.updateOne({ _id }, { $set: req.body });
    res.status(200).send({
      success: true,
      message: 'Successfully product updated',
      data: product,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};

exports.deleteOneProduct = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    await products_model.deleteOne({ _id });
    res.status(204).send({
      success: true,
      message: 'Successfully product deleted',
      data: product,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error.errors });
  }
};
