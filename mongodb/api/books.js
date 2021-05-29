const express = require("express");

const { bookCtrl: ctrl } = require("../controllers");

const router = express.Router();
//?genre=drama&
router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getOne);

router.post("/", express.json(), ctrl.add);

router.put("/:id", express.json(), ctrl.update);

router.delete("/:id", ctrl.delete);

module.exports = router;
