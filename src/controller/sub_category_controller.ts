import { ObjectId } from "mongodb";
import subCategories_model from "../model/sub_category_model";
import products from "../model/products_model";

const getAllSubCategories = async (_req: any, res: any) => {
  try {
    const subCategories = (await subCategories_model.find()).map((e) => {
      return { id: e._id, title: e.subCategary }
    });
    res.json({
      success: true,
      message: "Successfully found subCategories",
      data: subCategories,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
};

const getOneSubCategory = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    const subCategory = await subCategories_model.findOne({ _id });
    const allProducts = await products.find<{ _id: ObjectId }>();
    const subCategoryProducts = (subCategory?.productid ?? []).map((_e) => allProducts.find(({ _id }) => _id.toString() === _e.toString()))
    res.json({
      success: true,
      message: "Successfully found subCategory",
      data: subCategoryProducts,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
}

export = { getAllSubCategories, getOneSubCategory }