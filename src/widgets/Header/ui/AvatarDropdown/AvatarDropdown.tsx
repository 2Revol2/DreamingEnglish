"use client";
import { signOut } from "next-auth/react";
import { memo } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { Button } from "@/shared/ui/button";
import { RoutePath } from "@/shared/constants/router";
import { useUserData } from "@/entities/User";

export const AvatarDropdown = memo(() => {
  const { data: image } = useUserData((user) => user?.image);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={image || "https://github.com/shadcn.png"} />
        </Avatar>
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
