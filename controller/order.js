const ORDER = require("../models/order");
const CUSTOMERS = require("../models/customers");
const VEHICLE = require("../models/vehicle");
const mongoose = require("mongoose");

//Order create
function create(req, res, next) {
  let order = new ORDER(req.body);
  order.save().then((data) => {
    res.send(data);
  });
}

//Order view
function view(req, res, next) {
  ORDER.find({}).then((data) => {
    res.send(data);
  });
}
//Available Vehicle
function vehiclecheck(req, res, next) {
  ORDER.find({ orderNumber: req.params.orderNumber }).then((data) => {
    //console.log(data);
    let { customerId } = data[0]; // object destructuring
    CUSTOMERS.findById(customerId).then((data1) => {
      //console.log(data1.CustCity);
      let { CustCity } = data1;
      VEHICLE.find({ city: CustCity, Active_order: { $lt: 2 } }).then(
        async (data3) => {
          // console.log(data3);
          if (data3.length === 0) {
            res.send({ message: "No Vehicle Available" });
            return;
          }

          let filter = { reg_Num: data3[0].reg_Num };
          let update = { $inc: { Active_order: 1 } };

          let data4 = await VEHICLE.findOneAndUpdate(filter, update);

          filter = { orderNumber: req.params.orderNumber };
          update = { deliveryVehicleNo: data3[0].reg_Num };
          let data5 = await ORDER.findOneAndUpdate(filter, update);
          res.send({ vehichel_reg_number: data3[0].reg_Num });
        }
      );
    });
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.vehiclecheck = vehiclecheck;
//module.exports.update = update;
