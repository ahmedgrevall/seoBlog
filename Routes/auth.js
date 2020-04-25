const express = require("express");
const router = express.Router();
const { signup } = require("../Backend/Controller/auth");

const { runValidation } = require("../Backend/Validators");
const { userSignupValidator } = require("../Backend/Validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);

module.exports = router;
