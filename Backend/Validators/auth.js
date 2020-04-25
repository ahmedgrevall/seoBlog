const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is require"),
  check("email").isEmail().withMessage("Email is require"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must ne 6 digit long"),
];
