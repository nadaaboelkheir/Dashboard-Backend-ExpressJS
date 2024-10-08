const AsyncHandler = require("express-async-handler");
const DueModel = require("../models/due.model");
const { MAX_LIMIT } = require("../configs/env");
exports.createDue = AsyncHandler(async (req, res) => {
  const { title, topic, DueTo, courseName, dueType } = req.body;
  const due = await DueModel.create({
    title,
    topic,
    DueTo,
    courseName,
    dueType,
  });
  return res.status(200).json({ msg: "due added successfully", due: due });
});

exports.getAllDues = AsyncHandler(async (req, res) => {
  const limit =
    parseInt(req.query.limit, 10) || parseInt(MAX_LIMIT, 10) || 2;

  const dues = await DueModel.find().limit(limit);
  if (dues.length > 0) {
    return res.status(200).json({ dues: dues });
  } else {
    return res.status(200).json({ msg: "No dues found" });
  }
});

exports.updateDue = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, topic, DueTo, courseName, dueType } = req.body;

  const due = await DueModel.findById(id);
  if (!due) {
    return res.status(404).json({ msg: "due not found" });
  }
  due.title = title || due.title;
  due.topic = topic || due.topic;
  due.courseName = courseName || due.courseName;
  due.DueTo = DueTo || due.DueTo;
  due.dueType = dueType || due.dueType;

  await due.save();
  return res.status(200).json({ msg: "due updated successfully", due });
});

exports.deleteDue = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const due = await DueModel.findById(id);
  if (!due) {
    return res.status(404).json({ msg: " due Not Found" });
  }
  await DueModel.deleteOne({ _id: id });

  return res.status(200).json({ msg: "due deleted successfully" });
});
exports.getDueById = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const due = await DueModel.findById(id);
  if (!due) {
    return res.status(404).json({ msg: " due Not Found" });
  }
  return res.status(200).json({ due: due });
});
