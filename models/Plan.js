import mongoose from "mongoose";

const Plan = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Plan || mongoose.model("Plan", Plan);
