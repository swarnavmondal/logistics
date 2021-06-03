const VEHICLE = require("../models/vehicle");
const ORDER = require("../models/order");
const mongoose1 = require("mongoose");

//Vehicle create
function create(req, res, next) {
  let reg_Num = req.body.reg_Num;
  let Veh_Type = req.body.Veh_Type;
  let city = req.body.city;
  let Active_order = req.body.Active_order;

  let vehicle = new VEHICLE(req.body);
  vehicle.save().then((data) => {
    res.send(data);
  });
}

//Vehicle view
function view(req, res, next) {
  VEHICLE.find({}).then((data) => {
    res.send(data);
  });
}

//Vehicle update
function update(req, res, next) {
  VEHICLE.findByIdAndUpdate(req.params.id, req.body, (err, vehicle) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Unable to update due to some internal error" });
    }
    res.send("Update successfully");
  });
}

const delivery_status = async (req, res, next) => {
  let filter = { reg_Num: req.params.reg_Num };
  let update = { $inc: { Active_order: -1 } };
  await VEHICLE.findOneAndUpdate(filter, update);

  filter = { orderNumber: parseInt(req.params.order_Num) };
  update = { isDelivered: true };

  await ORDER.findOneAndUpdate(filter, update);
  res.send({ message: "Item is devivered" });
};

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.delivery_status = delivery_status;
