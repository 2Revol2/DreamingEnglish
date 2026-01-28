"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { mainNavLinks, NavLink } from "@/entities/NavLink";
import { RoutePath } from "@/shared/constants/router";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <RxHamburgerMenu size={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-screen mt-4"}>
        <DropdownMenuGroup className={"flex flex-col gap-2 items-center"}>
          {mainNavLinks.map((item) => (
            <DropdownMenuItem key={item.path} onClick={() => setIsOpen(false)}>
              <NavLink item={item} />
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={() => setIsOpen(false)}>
            <Link href={RoutePath.browse}>
              <Button className={"rounded-3xl p-6 text-2xl"}>Get Started</Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
