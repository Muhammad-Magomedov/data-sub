const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/card.route");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(router);

const start = async () => {
  await mongoose.connect(
    "mongodb+srv://lord:1234@cluster0.vb8ot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  console.log("Соединение установлено");

  app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
  });
};

start();