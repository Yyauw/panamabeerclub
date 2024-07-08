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
    subscription_data: { default_tax_rates: ["txr_1PVdg6IJkH0G341VPg2wkSdm"] },
    success_url:
      "http://localhost:3002/user/transaction/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3002/user/transaction/cancel",
  });
  console.log(session);

  return NextResponse.json({ session: session.url });
}
