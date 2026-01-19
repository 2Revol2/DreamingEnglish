import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import type { InfoSteps } from "@/shared/types/InfoSteps";

interface WhyIsWorksCardProps {
  step: InfoSteps;
}

export const WhyIsWorksCard = (props: WhyIsWorksCardProps) => {
  const { step } = props;
  const isReversed = Number(step.id) % 2 === 0;
  return (
    <div className={cn("text-white py-12 px-4", step.color)}>
      <Container className={cn("flex justify-center")}>
        <div
          className={cn(
            "flex gap-5 min-w-2/3 justify-between items-center flex-col md:justify-between",
            isReversed ? "md:flex-row-reverse" : "md:flex-row",
          )}
        >
          <div className="flex-shrink-0 bg-white/20 p-4 rounded-full">{step.icon}</div>
          <div>
            <h6 className="text-2xl font-semibold mb-2">{step.title}</h6>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">{step.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
