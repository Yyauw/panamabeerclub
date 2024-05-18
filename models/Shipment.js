import mongoose from "mongoose";

const Shipment = mongoose.Schema(
  {
    shippingDate: Date,
    beers: [
      {
        beer: {
          type: Schema.Types.ObjectId,
          ref: "Address",
        },
        quantity: Number,
      },
    ],
    souvenirs: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Shipment || mongoose.model("Shipment", Shipment);
