const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: [true, "userName is required"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    content: {
      type: String,
      required: [true, "Subject is required"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Announcement", AnnouncementSchema);
