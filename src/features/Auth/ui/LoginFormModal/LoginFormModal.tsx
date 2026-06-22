"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { LoginFormContent } from "../LoginFormContent/LoginFormContent";
import type { ReactNode } from "react";

interface LoginFormModalProps {
  trigger: ReactNode;
}

export const LoginFormModal = (props: LoginFormModalProps) => {
  const { trigger } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={"sm:max-w-[425px] bg-secondary-background"}>
        <DialogHeader>
          <DialogTitle> Sign in to your account</DialogTitle>
        </DialogHeader>
        <LoginFormContent />
      </DialogContent>
    </Dialog>
  );
};
