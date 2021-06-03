const express = require("express");
var router2 = express();
const create = require("../controller/customers.js");
const view = require("../controller/customers.js");
const update = require("../controller/customers.js");

const bodyparser = require("body-parser");

router2.use(bodyparser.json());
router2.post("/", create.create);
router2.get("/", view.view);
router2.patch("/:id", update.update);

module.exports = router2;
