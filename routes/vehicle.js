const express = require("express");
var router1 = express();
const vehicle = require("../controller/vehicle");

const bodyparser = require("body-parser");

router1.use(bodyparser.json());
router1.post("/", vehicle.create);
router1.get("/", vehicle.view);
router1.patch("/:id", vehicle.update);
router1.patch("/:reg_Num/order/:order_Num", vehicle.delivery_status);

module.exports = router1;
