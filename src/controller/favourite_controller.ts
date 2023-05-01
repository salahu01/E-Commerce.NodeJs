import { ObjectId } from "mongodb";
import favourite_model from "../model/favourite_model";

var getOne = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    if (_id) {
      const favourite = await favourite_model.findOne({ _id });
      if (favourite) {
        res.status(200).json({
          success: true,
          message: "Successfully found favourite products",
          data: favourite,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Couldn't found favourite products",
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

var addOne = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
    if (_id) {
      const favourite = await favourite_model.findOne({ _id });
      if (favourite) {
        favourite.productIds.push(req.body.productId);
        favourite.save();
      } else {
        await favourite_model.create({
          productIds: req.body.productId,
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
  } catch (error: any) {
    res.status(400).send(error.errors);
    error;
  }
};

export = { getOne , addOne }