const mongoose1 = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose1);
const VehicleSchema = new mongoose1.Schema({
  reg_Num: {
    type: String,
    unique: true,
    alphanumeric: true,
    required: true,
  },

  Veh_Type: {
    type: String,
    enum: ["bike", "truck"],
    default: "truck",
  },

  city: {
    type: String,
    required: true,
  },

  Active_order: {
    type: Number,

    default: 0,
  },
});

module.exports = mongoose1.model("VEHICLE", VehicleSchema);
