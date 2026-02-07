import { Container } from "@/shared/ui/container";
import { SectionHeader } from "@/shared/ui/section-header";
import { InfoCard } from "@/shared/ui/info-card";
import { HighlightBox } from "@/shared/ui/highlight-box";

export const WhyTraditionalFailsSection = () => {
  return (
    <section className="py-10 bg-secondary-background">
      <Container className="max-w-4xl">
        <SectionHeader
          title={"Why Traditional Methods Fail"}
          highlightedWord={"Fail"}
          subtitle={"Something is clearly wrong here."}
        />

        <div className="space-y-3 text-base sm:text-lg leading-relaxed">
          <p>Now, not everybody leaves school still not being able to use English properly, but many do.</p>

          <p className="font-medium">
            The reason traditional language learning is so bad is because they have to create meaningless tests in order
            to give students a score.
          </p>

          <p>
            School teachers are incredibly busy and aren&apos;t able to take the time to give each student in the class
            a full speaking test and give them a score on their true level of listening comprehension.
          </p>

          <InfoCard variant={"bordered"} className={"border-destructive bg-background"}>
            <p>
              It&apos;s far easier and far less time-consuming to give students a test where the questions have a{" "}
              <span className="text-green-500 font-semibold">&quot;right&quot;</span> answer and a{" "}
              <span className="text-destructive font-semibold">&quot;wrong&quot;</span> answer.
            </p>
          </InfoCard>

          <p>
            &quot;Fill in the blank&quot; grammar exercises, &quot;multiple choice&quot; questions and other meaningless
            tests like these have absolutely nothing to do with true language acquisition.
          </p>

          <p>
            These tests allow teachers to quickly and easily give a student a mark out of 10 for their test, but this is
            not how a language is learned.
          </p>
          <HighlightBox>
            <p className="text-xl font-bold mb-4">
              Here at Dreaming English, we don&apos;t have the same limitations that exist inside the school education
              system.
            </p>
            <p className="text-lg">
              With our method, you will learn English in an effective way, and in a way that will be enjoyable for you!
            </p>
          </HighlightBox>

          <p className="font-medium">
            Learning English shouldn&apos;t be a painful and boring process. And it really doesn&apos;t need to be.
            <span className="text-xl font-semibold text-primary">
              {" "}
              Let us explain to you the comprehensible input method used here at Dreaming English.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};
