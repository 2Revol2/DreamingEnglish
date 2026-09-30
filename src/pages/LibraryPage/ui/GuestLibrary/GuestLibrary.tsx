import { LoginFormModal } from "@/features/Auth";
import { Button } from "@/shared/ui/button";

export const GuestLibrary = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="max-w-lg text-center space-y-4">
        <h2 className="text-3xl font-bold">Your library is waiting</h2>

        <p className="text-muted-foreground text-lg">
          Sign in to save videos for later, keep track of your watch history, and monitor your daily learning progress.
        </p>

        <LoginFormModal trigger={<Button size={"lg"}>Sign in</Button>} />
      </div>
    </div>
  );
};
