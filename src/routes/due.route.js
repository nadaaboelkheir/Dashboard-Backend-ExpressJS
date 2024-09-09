const express = require("express");
const router = express.Router();
const {
  createDueValidator,
  updateDueValidator,
  deleteDueValidator,
  getDueByIDValidator,
} = require("../validations/due.vc");
const {
  createDue,
  getAllDues,
  updateDue,
  deleteDue,
  getDueById,
} = require("../controllers/due.controller");
router.post("/", createDueValidator, createDue);
router.get("/:id", getDueByIDValidator, getDueById);
router.get("/", getAllDues);

router.put("/:id", updateDueValidator, updateDue);
router.delete("/:id", deleteDueValidator, deleteDue);

module.exports = router;
