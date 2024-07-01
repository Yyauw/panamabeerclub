import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const data = await request.json();
  const { stripeId, newPrice } = data;

  const subitemId = await stripe.subscriptions.retrieve(stripeId);
  const itemId = subitemId.items.data[0].id;

  console.log(data);
  const subscription = await stripe.subscriptions.update(stripeId, {
    items: [
      {
        id: itemId,
        price: newPrice,
      },
    ],
    proration_behavior: "none",
  });
  return NextResponse.json({ session: "hola" });
}
