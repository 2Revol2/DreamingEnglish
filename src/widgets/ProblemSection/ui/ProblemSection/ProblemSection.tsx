import { Container } from "@/shared/ui/container";
import { InfoCard } from "@/shared/ui/info-card";
import { SectionHeader } from "@/shared/ui/section-header";

export const ProblemSection = () => {
  return (
    <section className="py-10">
      <Container className="max-w-4xl">
        <SectionHeader
          title={"The Problem"}
          highlightedWord={"Problem"}
          subtitle={"Traditional language learning doesn`t work very well."}
        />

        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            How is it possible that millions of children and teenagers learn English for anywhere between 4–8 years
            during primary and secondary education and then leave school still not being able to hold a conversation
            with a stranger?
          </p>
          <p className="font-semibold text-lg mb-3">It goes like this:</p>

          <InfoCard variant={"bordered"} className={"border-primary"}>
            <p>
              A young student will spend years at school completing &quot;fill in the blank&quot; grammar exercises,
              studying lists of vocabulary and completing units in a textbook. They take an English exam and may even
              <span className="text-green-500"> get a good score</span>!
            </p>
          </InfoCard>

          <p>
            Then, they leave school. A foreigner approaches them on the street and asks,{" "}
            <span className="italic text-primary">
              &quot;Excuse me, do you have any idea where I can find the nearest post office?&quot;
            </span>
          </p>

          <p>
            The young students stand there stunned. They try to speak and give an answer, but their brain is still
            trying to process what this stranger has asked them.
          </p>

          <div className="bg-accent-secondary-background p-6 rounded-xl text-center">
            <p className="text-2xl font-bold text-accent-secondary">&quot;Uh…sorry. No English sorry&quot;</p>
          </div>

          <p className="font-medium">
            No English? What about the 6 years of English classes at school?! What was all that time spent studying
            English from a textbook for if this young student can&apos;t answer a basic question about the nearest post
            office?
          </p>
        </div>
      </Container>
    </section>
  );
};
