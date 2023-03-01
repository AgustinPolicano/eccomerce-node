import express from "express";
const app = express();
app.use(express.json());

import allProducts from "./routes/products";

const PORT = 3000;

app.get("/ping", (req, res) => {
  console.log("ping");
  console.log("anashe");
  res.send("pong");
});

app.use('/api/products', allProducts);


app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
