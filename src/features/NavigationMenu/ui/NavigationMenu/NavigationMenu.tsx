"use client";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";

export const NavigationMenu = () => {
  const { isMobile } = useIsMobile();
  return isMobile ? <MobileMenu /> : <DesktopMenu />;
};
