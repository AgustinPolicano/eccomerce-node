import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";

const passwordDB = "DK0dW5yXKf421VU2";

import allProducts from "./routes/products";

const PORT = 3000;

async function connectDB() {
  const db = await mongoose.connect(
    "mongodb+srv://policanoagus:DK0dW5yXKf421VU2@cluster0.tfjuvya.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connected to", db.connection.db.databaseName);
}

connectDB();

app.get("/ping", (req, res) => {
  console.log("ping");
  console.log("anashe");
  res.send("pong");
});

app.use("/api/products", allProducts);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
