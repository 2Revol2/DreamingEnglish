import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface InfoCardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title?: string;
  description?: string | ReactNode;
  variant?: "default" | "bordered" | "destructive";
  className?: string;
  children?: ReactNode;
}

export const InfoCard = ({
  icon: Icon,
  iconColor,
  title,
  description,
  variant = "default",
  className,
  children,
}: InfoCardProps) => {
  const variants = {
    default: "bg-secondary-background p-5 rounded-xl",
    bordered: "bg-secondary-background p-6 rounded-xl border-l-4",
    destructive: "bg-destructive/10 p-6 rounded-xl border-l-4 border-destructive",
  };

  return (
    <div className={cn(variants[variant], className)}>
      {Icon && title && (
        <p className="font-semibold mb-2 flex items-center gap-2">
          <Icon className={iconColor} size={20} />
          {title}
        </p>
      )}
      {!Icon && title && <p className="font-semibold mb-2">{title}</p>}
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </div>
  );
};
