const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params; // getting the uniId from the req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productID) // chage the string id to number
  );

  // If the productID does not match
  if (!singleProduct) {
    res.status(404).send("Product Does Not Exit");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.get("*", (req, res) => {
  res.status(404).send("Opps!");
});

app.listen(5000, () => {
  console.log("Port is listerning ");
});
