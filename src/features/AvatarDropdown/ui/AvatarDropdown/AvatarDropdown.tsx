"use client";
import { signOut } from "next-auth/react";
import { memo, useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { RoutePath } from "@/shared/constants/router";
import { useUserData } from "@/entities/User";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const AvatarDropdown = memo(() => {
  const { data: image } = useUserData((user) => user?.image);
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useIsMobile();

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className={"flex gap-0.5"}>
        <Avatar>
          <AvatarImage src={image || "https://github.com/shadcn.png"} />
        </Avatar>
        {!isMobile ? isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup className={"p-1"}>
          <DropdownMenuItem className={"flex items-center justify-between"} onSelect={(e) => e.preventDefault()}>
            <ThemeSwitcher />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className={"flex items-center justify-between p-0"} onSelect={(e) => e.preventDefault()}>
            <Button
              onClick={() => signOut({ callbackUrl: RoutePath.main })}
              variant={"ghost"}
              className={"flex w-full justify-start"}
            >
              <RiLogoutCircleLine size={24} className={"text-primary"} />
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
