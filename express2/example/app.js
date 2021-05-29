const express = require("express");
const cors = require("cors");
const path = require("path");
// const bodyParser = require("body-parser");

const { productsApi } = require("./api");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.json())
app.use("/products", productsApi);

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((error, _, res, next) => {
  const code = error.code || 500;
  const message = error.message || "Server error";
  res.status(code).json({
    status: "fail",
    code,
    message,
  });
});

/*
 1. res.json - устанавливает заголовок ответа Content-type: "application/json"
 2. res.json правильно отправляет  null и undefined:
 res.send(null) -> пустое тело ответа
 res.json(null) -> null
 3. res.json учитывает настройки json express
*/
app.listen(3000);
