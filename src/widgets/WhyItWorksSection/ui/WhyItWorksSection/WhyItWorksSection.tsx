import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { WHY_IT_WORKS_STEPS } from "../../model/constants/constants";
import { WhyIsWorksCard } from "../WhyItWorksCard/WhyItWorksCard";

export const WhyItWorksSection = () => {
  return (
    <section className="lg:pt-20 pt-10">
      <div className="space-y-3 mb-5">
        <h4 className={"text-4xl text-center"}>Why this actually works</h4>
        <p className={"text-center w-full max-w-xl mx-auto text-muted-foreground"}>
          Because it matches how the brain acquires language
        </p>
      </div>

      <div>
        {WHY_IT_WORKS_STEPS.map((step) => (
          <WhyIsWorksCard step={step} key={step.title} />
        ))}
      </div>

      <div className={"flex justify-center"}>
        <Link
          className={
            "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
          }
          href="https://en.wikipedia.org/wiki/Input_hypothesis"
          target="_blank"
        >
          <span>Based on Stephen Krashen&apos;s Input Hypothesis</span>
          <FiExternalLink />
        </Link>
      </div>
    </section>
  );
};
