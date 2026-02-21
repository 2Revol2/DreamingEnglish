import { MethodHeroSection } from "@/widgets/MethodHeroSection";
import { ProblemSection } from "@/widgets/ProblemSection";
import { WhyTraditionalFailsSection } from "@/widgets/WhyTraditionalFailsSection";
import { ComprehensibleInputSection } from "@/widgets/ComprehensibleInputSection";
import { HowToUseVideosSection } from "@/widgets/HowToUseVideosSection";
import { QASection } from "@/widgets/QASection";

export const MethodPage = () => {
  return (
    <div>
      <MethodHeroSection />
      <ProblemSection />
      <WhyTraditionalFailsSection />
      <ComprehensibleInputSection />
      <HowToUseVideosSection />
      <QASection />
    </div>
  );
};
