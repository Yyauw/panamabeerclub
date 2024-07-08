import PricingPage from "@/components/user/PricingPage";
import connectDB from "@/lib/connectDB";
import Subscription from "@/models/Subscription";

export default function page() {
  const getPrice = async (plan) => {
    "use server";
    if (plan === "basico") return 16.04;
    if (plan === "experto") return 32.09;
    if (plan === "guru") return 53.49;
  };

  const updateSubcription = async (stripeId, plan) => {
    "use server";
    await connectDB();
    const sub = await Subscription.findOne({ stripeId: stripeId });
    sub.plan = plan;
    sub.price = await getPrice(plan);
    console.log(sub);
    await sub.save();
    return JSON.stringify(sub);
  };

  return <PricingPage updateSubcription={updateSubcription}></PricingPage>;
}
