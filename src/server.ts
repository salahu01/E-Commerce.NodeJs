import express from "express";
import authRoutes from "./routes/auth";
import catogoryRoutes from "./routes/category";
import subCategoryRoutes from "./routes/sub_category";
import productRoutes from "./routes/products_routes";
import cartRoutes from "./routes/cart";
import favouriteRoutes from "./routes/favourite";
import flashSale from "./routes/flash_sale";
import { connectDb } from "./configs/db";

const port = process.env.PORT || 4005;

const app = express();

app.get("/", (_req, _res) => {
  _res.status(200).send(" ⚡️ Server Runnig Successfully ⚡️ ");
});

app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/category", catogoryRoutes);
app.use("/subCategory", subCategoryRoutes)
app.use("/cart", cartRoutes);
app.use("/favourite", favouriteRoutes);
app.use("/flashsale", flashSale);

app.all("*", (_req, _res) => {
  _res.status(404).send("Page Not Found");
});

connectDb().then(() =>
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  })
);
