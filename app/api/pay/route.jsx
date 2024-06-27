import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const data = await request.json();
  console.log(data);

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card", "paypal"],
    customer_email: data.email,
    line_items: [
      {
        price: data.priceId,
        quantity: 1,
      },
    ],
    automatic_tax: {
      enabled: true,
    },
    success_url:
      "http://localhost:3000/user/transaction/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/user/transaction/cancel",
  });
  console.log(session);

  return NextResponse.json({ session: session.url });
}
