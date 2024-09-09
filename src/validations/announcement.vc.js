const validatorMiddleware = require("../middlewares/validators.mw");
const { check, param, oneOf } = require("express-validator");

exports.createAnnouncementValidator = [
  check("userName")
    .notEmpty()
    .withMessage("userName is required")
    .bail()
    .trim()
    .isString()
    .withMessage("title should be string ")
    .isLength({ min: 3 })
    .withMessage("Color name must not be less than 3 characters"),
  check("content")
    .notEmpty()
    .withMessage("content is required")
    .bail()
    .trim()
    .isString()
    .withMessage("content should be string "),
  check("subject ")
    .notEmpty()
    .withMessage("subject is required")
    .bail()
    .trim()
    .isString()
    .withMessage("subject should be string "),

  validatorMiddleware,
];
exports.updateAnnouncementValidator = [
  oneOf(
    [
      check("username")
        .exists()
        .withMessage("No username field exists in the request data"),
      check("content")
        .exists()
        .withMessage("No content field exists in the request data"),
      check("subject")
        .exists()
        .withMessage("No subject field exists in the request data"),
    ],
    { message: "There are no updates!" }
  ),

  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),

  check("userName")
    .notEmpty()
    .withMessage("userName is required")
    .bail()
    .trim()
    .isString()
    .withMessage("title should be string ")
    .isLength({ min: 3 })
    .withMessage("Color name must not be less than 3 characters"),
  check("content")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content should be a string"),

  check("subject")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Subject is required")
    .isString()
    .withMessage("Subject should be a string"),

  validatorMiddleware,
];
exports.deleteAnnouncementValidator = [
  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),
  validatorMiddleware,
];
exports.getAnnouncementByIDValidator = [
  param("id").isMongoId().withMessage("Invalid MongoDB ObjectId"),
  validatorMiddleware,
];
