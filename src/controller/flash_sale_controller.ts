import { ObjectId } from "mongodb";
import flash_model from "../model/flash_sale_model";
import products from "../model/products_model";

var getAllFalshProducts = async (_req: any, res: any) => {
  try {
    const flahSaleIds = (await flash_model.find<{ productIds: String[]; }>()).at(0)?.productIds ?? [];
    const allProducts = await products.find<{ _id: ObjectId }>();
    const flashSaleProducts = flahSaleIds.map((_e) => allProducts.find(({ _id }) => _id.toString() === _e.toString()))
    res.json({
      success: true,
      message: "Successfully found flashsale products",
      data: flashSaleProducts,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went worng !", data: error });
  }
};

var getOneFlashProduct = async (req: any, res: any) => {
  try {
    const _id = new ObjectId(req.params.id);
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

export = { getAllFalshProducts, getOneFlashProduct }