const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const routes = require("./api");

const app = express();

app.use(cors());

app.use("/authors", routes.authors);
app.use("/books", routes.books);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((error, _, res, __) => {
  const code = error.code || 500;
  const message = error.message || "Server error";

  res.status(code).json({
    status: "fail",
    code,
    message,
  });
});

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = PORT || 3000;
    app.listen(port);
  })
  .catch((error) => console.log(error));
