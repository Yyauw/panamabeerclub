import SurveyPage from "@/components/survey/SurveyPage";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";

export default function Page() {
  const setUserPreferences = async (preferences, id) => {
    "use server";
    await connectDB();
    const user = await User.findById(id);
    user.preference = {
      ...preferences,
    };
    await user.save();
  };
  return (
    <>
      <SurveyPage setUserPreferences={setUserPreferences} />
    </>
  );
}
