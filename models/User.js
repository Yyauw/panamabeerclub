import mongoose, { Schema } from "mongoose";

const User = mongoose.Schema(
  {
    uid: String,
    name: String,
    lastName: String,
    birthDate: Date,
    email: String,
    phoneNumber: Number,
    userType: {
      type: String,
      enum: ["client", "admin", "delivery"],
    },
    preference: {
      style: [String],
      ibu: Number,
      alc: Number,
      aroma: [String],
      body: [String],
    },
    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);
