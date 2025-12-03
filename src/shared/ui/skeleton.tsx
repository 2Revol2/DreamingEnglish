import { cn } from "@/shared/lib/utils";

const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-secondary-background animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
export { Skeleton };
