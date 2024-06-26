import mongoose, { Schema } from "mongoose";

const Subscription = mongoose.Schema(
  {
    frequency: String,
    price: Number,
    subscriptionDate: Date,
    nextPayment: Date,
    status: String,
    plan: String,
    invoice: String,
    stripeId: String,
    shipment: [{ type: Schema.Types.ObjectId, ref: "shipment" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", Subscription);
