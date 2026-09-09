import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: {
      type: String,
      enum: ["to-read", "reading", "finished"],
      default: "to-read",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Book", bookSchema);
