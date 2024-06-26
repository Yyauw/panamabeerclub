import ConfirmationPanel from "@/components/user/confirmation/ConfirmationPanel";

export default function ConfirmationPage() {
  return (
    <div className="h-[80vh]">
      <h1>Confirmation</h1>
      <p>Thank you for confirming your email address.</p>
      <ConfirmationPanel></ConfirmationPanel>
    </div>
  );
}
