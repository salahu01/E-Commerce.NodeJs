const { ObjectId } = require("mongodb");
const cart_model = require("../model/cart_model");

exports.getOne = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    if (_id) {
      const cart = await cart_model.findOne({ _id });
      if (cart) {
        res.status(200).json({
          success: true,
          message: "Successfully found cart products",
          data: cart,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Couldn't found cart products",
          data: [],
        });
      }

    } else {
      res.status(400).json({
        success: false,
        message: "Pass currect data !",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }


};

exports.addOne = async (req, res) => {
  try {
    const _id = ObjectId(req.params.id);
    if (_id) {
      const cart = await cart_model.findOne({ _id });
      const data = {
        productId: req.body.productId,
        productQuantity: req.body.productQuantity,
        _id: req.body.productId,
      };
      if (cart) {
        cart.products.push(data);
        cart.save();
      } else {
        await cart_model.create({
          products: data,
          _id: _id,
        });
      }
      res.status(201).send({
        success: true,
        message: `${req.body}\n product is successfully added`,
        data: [],
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Pass currect data !",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }

};
