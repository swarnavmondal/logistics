const express = require("express");
var router = express();
const create = require("../controller/item");
const view = require("../controller/item");
const update = require("../controller/item");

const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post("/", create.create);
router.get("/", view.view);
router.patch("/:id", update.update);

module.exports = router;
