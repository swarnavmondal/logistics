const express = require("express");
var app = express();
var mongoose = require("mongoose");

const router = require("./routes/item.js");
const router1 = require("./routes/vehicle.js");
const router2 = require("./routes/customers.js");
const router3 = require("./routes/order.js");

//Route
app.get("/", function (req, res) {
  res.send("hello world");
});
//for item
app.use("/item", router);
//for vehicle
app.use("/vehicle", router1);
//for customers
app.use("/customers", router2);
//for Order
app.use("/order", router3);

//MongoDB connection
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(9000, function () {
  console.log("Server is Up");
});
