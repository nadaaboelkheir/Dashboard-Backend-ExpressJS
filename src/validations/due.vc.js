const validatorMiddleware = require("../middlewares/validators.mw");
const { check, param, oneOf } = require("express-validator");

exports.createDueValidator = [
  
  check("title")
    .notEmpty()
    .withMessage("title is required")
    .bail()
    .trim()
    .isString()
    .withMessage("title should be string "),
  check("topic")
    .notEmpty()
    .withMessage("title is required")
    .bail()
    .trim()
    .isString()
    .withMessage("title should be string "),
//   check("DueTo")
//     .notEmpty()
//     .withMessage("DueTo is required")
//     .bail()
//     .trim()
//     .isDate()
//     .withMessage("DueTo should be date"),
  check("courseName")
    .notEmpty()
    .withMessage("courseName is required")
    .bail()
    .trim()
    .isString()
    .withMessage("courseName should be string "),
  check("dueType")
    .notEmpty()
    .withMessage("Due type is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Due type should be string "),
  validatorMiddleware,
];

exports.updateDueValidator = [
  oneOf(
    [
      check("title")
        .exists()
        .withMessage("No title field exists in the request data"),
      check("topic")
        .exists()
        .withMessage("No topic field exists in the request data"),
      check("DueTo")
        .exists()
        .withMessage("No DueTo field exists in the request data"),
      check("courseName")
        .exists()
        .withMessage("No courseName field exists in the request data"),
      check("dueType")
        .exists()
        .withMessage("No dueType field exists in the request data"),
    ],
    { message: "There are no updates!" }
  ),

  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),

  check("title")
    .optional()
    .trim()
    .isString()
    .withMessage("title should be a string"),

  check("topic")
    .optional()
    .trim()
    .isString()
    .withMessage("topic should be a string"),

  check("DueTo")
    .optional()
    .trim()
    .isDate()
    .withMessage("DueTo should be a date"),

  check("courseName")
    .optional()
    .trim()
    .isString()
    .withMessage("courseName should be a string"),

  check("dueType")
    .optional()
    .trim()
    .isString()
    .withMessage("dueType should be a string"),

  validatorMiddleware,
];
exports.deleteDueValidator = [
  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),
  validatorMiddleware,
];

exports.getDueByIDValidator = [
  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),
  validatorMiddleware,
];
