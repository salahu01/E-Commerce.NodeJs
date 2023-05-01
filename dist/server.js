"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const category_1 = __importDefault(require("./routes/category"));
const sub_category_1 = __importDefault(require("./routes/sub_category"));
const products_routes_1 = __importDefault(require("./routes/products_routes"));
const cart_1 = __importDefault(require("./routes/cart"));
const favourite_1 = __importDefault(require("./routes/favourite"));
const flash_sale_1 = __importDefault(require("./routes/flash_sale"));
const db_1 = require("./configs/db");
const port = process.env.PORT || 4005;
const app = (0, express_1.default)();
app.get("/", (_req, _res) => {
    _res.status(200).send("Server Runnig Successfully");
});
app.use(express_1.default.json());
app.use("/products", products_routes_1.default);
app.use("/auth", auth_1.default);
app.use("/category", category_1.default);
app.use("/subCategory", sub_category_1.default);
app.use("/cart", cart_1.default);
app.use("/favourite", favourite_1.default);
app.use("/flashsale", flash_sale_1.default);
app.all("*", (_req, _res) => {
    _res.status(404).send("Page Not Found");
});
(0, db_1.connectDb)().then(() => app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}));
