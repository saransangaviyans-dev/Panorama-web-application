const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { stitchImages } = require("../controllers/stitchController");

router.post("/stitch", upload.array("images"), stitchImages);

module.exports = router;
