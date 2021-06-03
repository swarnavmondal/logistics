const express = require("express");
var router3 = express();
const order = require("../controller/order");

const bodyparser = require("body-parser");

router3.use(bodyparser.json());
router3.post("/", order.create);
router3.get("/", order.view);
router3.get("/:orderNumber/available-vehicle", order.vehiclecheck);
module.exports = router3;
