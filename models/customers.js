const mongoose2 = require("mongoose");
const CustomerSchema = new mongoose2.Schema({
  CustName: {
    type: String,
    required: true,
  },
  CustCity: {
    type: String,
    required: true,
  },
});
module.exports = mongoose2.model("CUSTOMERS", CustomerSchema);
