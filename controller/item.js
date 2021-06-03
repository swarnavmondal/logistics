const ITEM = require("../models/item");
const mongoose = require("mongoose");

//item create
function create(req, res, next) {
  let itemName = req.body.itemName;
  let itemPrice = req.body.itemPrice;

  let item = new ITEM({
    itemName,
    itemPrice,
  });
  item.save().then((data) => {
    res.send(data);
  });
}

//item view
function view(req, res, next) {
  ITEM.find({}).then((data) => {
    res.send(data);
  });
}

//item update
function update(req, res, next) {
  ITEM.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    //console.log(req.body);
    return;
    if (err) {
      return res.status(500).send({ error: "Unable to update Item " });
    }
    res.send("Update successfully");
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
