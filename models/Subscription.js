import mongoose from "mongoose";

const Subscription = mongoose.Schema(
  {
    frequency: String,
    price: String,
    subscriptionDate: Date,
    plan: { type: Schema.Types.ObjectId, ref: "Plan" },
    shipment: { type: Schema.Types.ObjectId, ref: "shipment" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Subscription ||
  mongoose.model("Suscritpion", Subscription);
