const express = require("express");
const router = express.Router();
const { time } = require("../Backend/Controller/blog");

router.get("/", time);

module.exports = router;
