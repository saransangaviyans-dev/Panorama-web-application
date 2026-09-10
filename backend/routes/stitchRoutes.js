const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { stitchImages, getHistory } = require("../controllers/stitchController");

router.post("/stitch", upload.array("images"), stitchImages);

router.get("/history", getHistory);

module.exports = router;
