const express = require("express");
// const bodyParser = require("body-parser");

const { productsCtrl } = require("../controllers");

const router = express.Router();
// /products?brand=Apple&priceFrom=14000&priceTo=20000
router.get("/", productsCtrl.getAll);

router.get("/:id", productsCtrl.getOne);

// router.post("/", bodyParser.json(), productsCtrl.add);
router.post("/", express.json(), productsCtrl.add);

router.put("/:id", productsCtrl.update);

router.delete("/:id", productsCtrl.remove);

module.exports = router;
