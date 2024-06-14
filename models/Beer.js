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
    company: {
      type: String,
      enum: ["casa bruja", "rana dorada", "clandestina"],
    },
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Beer || mongoose.model("Beer", Beer);
