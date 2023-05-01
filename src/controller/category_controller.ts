import { ObjectId } from "mongodb";
import categories_model from "../model/categarie_model";

const getAllCategories = async (_req: any, _res: any) => {
  try {
  const categories = await categories_model.find();
  _res.json({
    success: true,
    message: "Successfully found cart categorys",
    data: categories,
  });
  } catch (error) {
    _res.status(404).json({ success: false , message: "Something went worng !", data: error });
  }
};

const getOneCategory = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    const category = await categories_model.findOne({ _id });
    res.json({
      success: true,
      message: "Successfully found cart category",
      data: category,
    });
  } catch (error) {
    res.status(404).json({ success: false , message: "Something went worng !", data: error });
  }
}

export = { getAllCategories , getOneCategory }