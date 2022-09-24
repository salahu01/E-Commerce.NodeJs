const express = require("express");
const app = express();
const currentPort = process.env.PORT || 4005;
const authRoutes = require("./routes/auth");
const catogoryRoutes = require("./routes/category");
const subCategoryRoutes = require("./routes/sub_category");
const productRoutes = require("./routes/products_routes");
const cartRoutes = require("./routes/cart");
const favouriteRoutes = require("./routes/favourite");
const flashSale = require("./routes/flash_sale");
const connectDb = require("./db/mongodb");

app.get("/", (req, res) => {
  res.status(200).send("Server Runnig Successfully");
});

app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/category", catogoryRoutes);
app.use("/subCategory",subCategoryRoutes)
app.use("/cart", cartRoutes);
app.use("/favourite", favouriteRoutes);
app.use("/flashsale", flashSale);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

connectDb().then(() =>
  app.listen(currentPort, () => {
    console.log(`Server is running at ${currentPort}`);
  })
);
