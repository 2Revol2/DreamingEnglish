import { AiVideoInteractionSection } from "@/widgets/AiVideoInteractionSection";
import { HeroSection } from "@/widgets/HeroSection";
import { HowItWorksSection } from "@/widgets/HowItWorksSection";
import { WhyItWorksSection } from "@/widgets/WhyItWorksSection";
import { CTASection } from "@/widgets/CTASection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <AiVideoInteractionSection />
      <WhyItWorksSection />
      <CTASection />
    </>
  );
};
