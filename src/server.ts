import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { config } from "dotenv";
import options from "./utils/swagger/swagger";
import authRoutes from "./routes/auth";
import catogoryRoutes from "./routes/category";
import subCategoryRoutes from "./routes/sub_category";
import productRoutes from "./routes/products_routes";
import cartRoutes from "./routes/cart";
import favouriteRoutes from "./routes/favourite";
import flashSale from "./routes/flash_sale";
import { connectDb } from "./configs/mongodb";

config()

const port = process.env.PORT || 8888;

const url = `http://localhost:${port}`

const app = express();

const specs = swaggerJsdoc(options(url));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", catogoryRoutes);
app.use("/api/subCategory", subCategoryRoutes)
app.use("/api/cart", cartRoutes);
app.use("/api/favourite", favouriteRoutes);
app.use("/api/flashsale", flashSale);

app.all("*", (_req, _res) => {
  _res.status(404).send("Page Not Found");
});

async function startServer(){
  await connectDb()
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${url}/api-docs`);
  })
}

startServer()