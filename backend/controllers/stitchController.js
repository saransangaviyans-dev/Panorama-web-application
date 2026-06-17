const axios = require("axios");
const FormData = require("form-data");

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
    res.json(response.data);
  } catch (error) {
    console.log("FASTAPI ERROR:");
    console.log(error.response?.data);

    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
};

module.exports = { stitchImages };
