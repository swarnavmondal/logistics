const CUSTOMERS = require("../models/customers");
const mongoose2 = require("mongoose");

//Customers create
function create(req, res, next) {
  let CustName = req.body.CustName;
  let CustCity = req.body.CustCity;

  let customers = new CUSTOMERS({
    CustName,
    CustCity,
  });
  customers.save().then((data) => {
    res.send(data);
  });
}

//Customers view
function view(req, res, next) {
  CUSTOMERS.find({}).then((data) => {
    res.send(data);
  });
}

//Customers update
function update(req, res, next) {
  CUSTOMERS.findByIdAndUpdate(req.params.id, req.body, (err, customers) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Updating the Customer details " });
    }
    res.send("Update successfully");
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
