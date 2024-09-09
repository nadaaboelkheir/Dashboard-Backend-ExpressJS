const express = require("express");
const router = express.Router();
const {
  createAnnouncementValidator,
  updateAnnouncementValidator,
  deleteAnnouncementValidator,
  getAnnouncementByIDValidator,
} = require("../validations/announcement.vc");
const {
  createAnnouncements,
  getAllAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getAnnouncementById,
} = require("../controllers/announcement.controller");
router.post("/", createAnnouncementValidator, createAnnouncements);

router.get("/", getAllAnnouncement);
router.get("/:id", getAnnouncementByIDValidator, getAnnouncementById);

router.put("/:id", updateAnnouncementValidator, updateAnnouncement);
router.delete("/:id", deleteAnnouncementValidator, deleteAnnouncement);

module.exports = router;
