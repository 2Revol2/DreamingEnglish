import { IoClose } from "react-icons/io5";
import { Button } from "./button";
import type { ReactNode } from "react";

interface FilterBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  onRemove?: () => void;
}

export const FilterBadge = (props: FilterBadgeProps) => {
  const { children, onRemove, icon } = props;

  return (
    <Button variant={"accent"} className={"rounded-3xl h-7 px-2!"} onClick={onRemove}>
      {icon}
      {children}
      <IoClose />
    </Button>
  );
};
