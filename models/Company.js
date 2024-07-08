import mongoose from "mongoose";

const Company = mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Company || mongoose.model("Company", Company);
