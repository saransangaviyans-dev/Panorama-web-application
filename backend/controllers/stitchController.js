const axios = require("axios");
const FormData = require("form-data");
const Panorama = require("../models/Panorama");

const stitchImages = async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res
        .status(400)
        .json({ status: "error", message: "At least 2 images are required" });
    }

    const formData = new FormData();

    for (const file of req.files) {
      formData.append("files", file.buffer, file.originalname);
    }

    const response = await axios.post(
      "http://127.0.0.1:8000/stitch",
      formData,
      {
        headers: formData.getHeaders(),
      },
    );

    try {
      // await Panorama.create({
      //   imageName: response.data.filename,
      //   imagesUsed: response.data.images_used,
      //   executionTime: Number(response.data.execution_time.toFixed(2)),
      // });
    }
     catch (dbError) {
      console.error("Failed to save panorama history");

      console.error(dbError.message);
    }
    return res.json(response.data);
  } catch (error) {
    console.log("FASTAPI ERROR:");
    console.log(error.response?.data);

    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
};

const getHistory = async (req, res) => {
  try {
    const history = await Panorama.find().sort({
      createdAt: -1,
    });

    const formattedHistory = history.map((item) => ({
      id: item._id,
      imageUrl: `http://127.0.0.1:8000/results/${item.imageName}`,
      imagesUsed: item.imagesUsed,
      executionTime: item.executionTime,
      createdAt: item.createdAt,
    }));

    return res.json(formattedHistory);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { stitchImages, getHistory };
