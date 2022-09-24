const { ObjectId } = require("mongodb");
const subCategories_model = require("../model/sub_category_model");

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategories_model.find();
    res.json({
      success: true,
      message: "Successfully found subCategories",
      data: subCategories,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
};

exports.getOneSubCategory = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    const subCategory = await subCategories_model.findOne({ _id });
    res.json({
      success: true,
      message: "Successfully found subCategory",
      data: subCategory,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
}
