import express from "express";
const router = express.Router();
import cartController from "../controller/cart_controller";
import auth from "../middleware/auth_middleware";

/**
* @swagger
* tags:
*   name: Cart
*   description: API to manage cart products
*/

router
  .use(auth)
  .route("/:id")
/** 
 * @swagger
 *   /api/cart/:id:
 *     get:
 *       summary: Get One
 *       tags: [Cart]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a cart
 *       responses:
 *         "200":
 *          description: Successfully found cart products
 *         "404":
 *           description: Couldn't found cart products
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
  .get(cartController.getOne)

/** 
 * @swagger
 *   /api/cart/:id:
 *     post:
 *       summary: Add One
 *       tags: [Cart]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CartProduct'
 *       responses:
 *         "201":
 *          description: Product is successfully added
 *         "404":
 *           description: Something went worng !
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
  .post(cartController.addOne);

export = router;
