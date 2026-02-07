import { cn } from "@/shared/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightedWord?: string;
  className?: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
  const { title, subtitle, highlightedWord, className } = props;

  const renderTitle = () => {
    if (!highlightedWord) return title;

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("space-y-1 sm:mb-5 mb-3", className)}>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{renderTitle()}</h2>
      {subtitle && <p className="text-base sm:text-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
