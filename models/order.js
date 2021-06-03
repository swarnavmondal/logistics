const mongoose3 = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose3);

const orderSchema = new mongoose3.Schema({
  orderNumber: {
    type: Number,
    default: 1,
    incrementBy: 1,
  },
  customerId: {
    type: String,
  },
  itemId: {
    type: String,
  },
  itemPrice: {
    type: Number,
  },
  deliveryVehicleNo: {
    type: String,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});

orderSchema.plugin(AutoIncrement, { inc_field: "orderNumber" });
module.exports = mongoose3.model("ORDER", orderSchema);
