import mongoose from "mongoose";

const Souvenir = mongoose.Schema(
  {
    name: String,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Souvenir || mongoose.model("Souvenir", Souvenir);
