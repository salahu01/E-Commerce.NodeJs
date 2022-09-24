const { ObjectId } = require("mongodb");
const flash_model = require("../model/flash_sale_model");

exports.getAllFalshProducts = async (req, res) => {
  try {
    const products = await flash_model.find();
    res.json({
      success: true,
      message: "Successfully found flashsale products",
      data: products,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }

};

exports.getOneFlashProduct = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    const product = await flash_model.findOne({ _id });
    res.json({
      success: true,
      message: "Successfully found flashsale product",
      data: product,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
}
