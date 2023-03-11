const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
  ItemUrl: {
    type: String,
    required: String,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: [
    {
      type: ObjectID,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: ObjectID,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: ObjectID,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", ItemSchema);
