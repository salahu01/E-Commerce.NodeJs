import express from "express";
const router = express.Router();
import controller from "../controller/auth_cotroller";

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API to manage Authentication
 */

/** 
 * @swagger
 *   /api/auth/signUp:
 *     post:
 *       summary: Create user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
router.route("/signUp").post(controller.signUp);


/** 
 * @swagger
 *   /api/auth/signIn:
 *     post:
 *       summary: Create user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
router.route("/signIn").post(controller.logIn);

export = router;
