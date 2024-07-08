import mongoose from "mongoose";

const Address = mongoose.Schema(
  {
    address: String,
    description: String,
    lng: Number,
    lat: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Address || mongoose.model("Address", Address);
