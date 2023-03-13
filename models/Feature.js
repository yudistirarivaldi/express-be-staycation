const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema;

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  itemId: {
    type: ObjectID,
    ref: 'Item',
  },
});

module.exports = mongoose.model("Feature", featureSchema);
