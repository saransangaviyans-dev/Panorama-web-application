const mongoose = require("mongoose")

const panoramaSchema = new mongoose.Schema(
  {
    imageName: {
      type: String,
      required: true,
    },

    imagesUsed: {
      type: Number,
      required: true,
    },

    executionTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Panorama = mongoose.model("Panorama", panoramaSchema);


module.exports = Panorama;