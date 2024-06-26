import mongoose, { Schema } from "mongoose";

const Shipment = mongoose.Schema(
  {
    shippingDate: Date,
    beers: [
      {
        beer: {
          type: Schema.Types.ObjectId,
          ref: "Beer",
        },
        quantity: Number,
      },
    ],
    souvenirs: {
      Souvenir: {
        type: Schema.Types.ObjectId,
        ref: "Souvenir",
      },
      quantity: Number,
    },
    status: String,
    evidence: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Shipment || mongoose.model("Shipment", Shipment);
