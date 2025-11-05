"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { LoginFormContent } from "../LoginFormContent/LoginFormContent";

export const LoginFormModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className={"sm:max-w-[425px] bg-secondary-background"}>
        <DialogHeader>
          <DialogTitle> Sign in to your account</DialogTitle>
        </DialogHeader>
        <LoginFormContent />
      </DialogContent>
    </Dialog>
  );
};
