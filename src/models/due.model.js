const mongoose = require("mongoose");

const DueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
    },
    DueTo: {
      type: Date,
      required: [true, "Due to is required"],
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Due date should be in the future.",
      },
      courseName: {
        type: String,
        required: [true, "Course name is required"],
      },
      dueType: {
        type: String,
        required: [true, "Due type is required"],
        enum: ["Assignment", "Quiz"],
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Due", DueSchema);
