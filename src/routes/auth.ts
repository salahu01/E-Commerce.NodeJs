import express from "express";
const router = express.Router();
import controller from "../controller/auth_cotroller";

router.route("/signUp").post(controller.signUp);
router.route("/logIn").post(controller.logIn);

export = router;
