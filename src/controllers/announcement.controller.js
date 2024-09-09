const AsyncHandler = require("express-async-handler");
const AnnouncementModel = require("../models/announcement.model");

exports.createAnnouncements = AsyncHandler(async (req, res) => {
  const { userName, content, subject } = req.body;
  const announcement = await AnnouncementModel.create({
    userName,
    content,
    subject,
  });
  return res.status(200).json({ msg: "success", announcement: announcement });
});

exports.getAllAnnouncement = AsyncHandler(async (req, res) => {
  const announcements = await AnnouncementModel.find();
  if (announcements.length > 0) {
    return res
      .status(200)
      .json({ msg: "success", announcements: announcements });
  } else {
    return res.status(200).json({ msg: "No announcements found" });
  }
});

exports.updateAnnouncement = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userName, content, subject } = req.body;

  const announcement = await AnnouncementModel.findById(id);
  if (!announcement) {
    return res.status(404).json({ msg: "Announcement not found" });
  }
  announcement.userName = userName || announcement.userName;
  announcement.content = content || announcement.content;
  announcement.subject = subject || announcement.subject;
  await announcement.save();
  return res
    .status(200)
    .json({ msg: "Announcement updated successfully", announcement });
});

exports.deleteAnnouncement = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const announcement = await AnnouncementModel.findById(id);
  if (!announcement) {
    return res.status(404).json({ msg: " Announcement Not Found" });
  }
  await AnnouncementModel.deleteOne({ _id: id });

  return res.status(200).json({ msg: "Announcement deleted successfully" });
});
exports.getAnnouncementById = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const announcement = await AnnouncementModel.findById(id);
  if (!announcement) {
    return res.status(404).json({ msg: " Announcement Not Found" });
  }
  return res.status(200).json({ msg: "success", announcement: announcement });
});
