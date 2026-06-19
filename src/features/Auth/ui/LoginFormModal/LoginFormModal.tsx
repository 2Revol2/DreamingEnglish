"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { LoginFormContent } from "../LoginFormContent/LoginFormContent";

export const LoginFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"accent"} size={"sm"}>
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className={"sm:max-w-[425px] bg-secondary-background"}>
        <DialogHeader>
          <DialogTitle> Sign in to your account</DialogTitle>
        </DialogHeader>
        <LoginFormContent />
      </DialogContent>
    </Dialog>
  );
};
