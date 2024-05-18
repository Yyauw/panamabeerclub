import mongoose, { Schema } from "mongoose";

const Beer = mongoose.Schema(
  {
    name: String,
    style: String,
    ibu: Number,
    alc: Number,
    aroma: String,
    body: String,
    quantity: Number,
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Beer || mongoose.model("Beer", Beer);
