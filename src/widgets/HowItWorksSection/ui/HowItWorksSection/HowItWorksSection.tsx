import { Container } from "@/shared/ui/container";
import { LEARNING_STAGES } from "../../model/constants/constants";
import { HowItWorksCard } from "../HowItWorksCard/HowItWorksCard";

export const HowItWorksSection = () => {
  return (
    <section className={"lg:pt-20 pt-10 lg:pb-16 pb-8 bg-secondary-background"}>
      <Container className={"flex flex-col gap-5"}>
        <div className="space-y-3">
          <h4 className={"text-4xl text-center"}>How it works</h4>
          <p className={"text-center w-full max-w-xl mx-auto  text-muted-foreground"}>
            We all learned our first language the same way: by being immersed, listening, and improving little by
            little. Dreaming gives you the content you need to mimic this process. No memorization, no grammar drills.
          </p>
        </div>

        <div className={"flex justify-between gap-5 flex-col lg:flex-row"}>
          {LEARNING_STAGES.map((info) => {
            return <HowItWorksCard stage={info} key={info.title} />;
          })}
        </div>
      </Container>
    </section>
  );
};
