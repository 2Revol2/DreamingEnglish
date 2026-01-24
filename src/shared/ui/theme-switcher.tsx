import { IoMdMoon } from "react-icons/io";
import { useThemeStore } from "@/shared/store/useThemeStore";
import { Switch } from "./switch";
import { Label } from "./label";

export const ThemeSwitcher = () => {
  const { isDark, setDark } = useThemeStore();
  return (
    <div className={"flex items-center justify-center gap-2"}>
      <Label htmlFor={"dark-mode"}>
        <IoMdMoon className={"text-primary"} size={24} />
        <span>Dark Mode</span>
      </Label>
      <Switch checked={isDark} onCheckedChange={setDark} id={"dark-mode"} />
    </div>
  );
};
