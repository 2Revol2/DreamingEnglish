import { AlertTriangle, CheckCircle, Eye, Smile, Target, X } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { SectionHeader } from "@/shared/ui/section-header";
import { HighlightBox } from "@/shared/ui/highlight-box";
import { InfoCard } from "@/shared/ui/info-card";
import { DONTS, DOS } from "../../model/constants/constants";

export const HowToUseVideosSection = () => {
  return (
    <section className="py-10 bg-secondary-background">
      <Container className="max-w-4xl">
        <SectionHeader title={"How to Use"} highlightedWord={"Our Videos"} />
        <p className={"text-base sm:text-lg mb-5"}>
          We said this earlier, but it bears repeating.{" "}
          <span className="font-bold">Watching the videos is by itself what results in acquiring the language.</span>{" "}
          Not doing comprehension tests. Not reviewing vocabulary. Not doing other activities related to the content.
          Any of these activities that don’t provide you with comprehensible input will not result in acquisition.
        </p>
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <HighlightBox>
            <p className="font-medium">
              Watching our videos is the core activity that leads to language acquisition. You don&apos;t need to do
              comprehension tests, review vocabulary, or complete other exercises. These activities don&apos;t provide
              comprehensible input, and only comprehensible input results in true language acquisition.
            </p>
          </HighlightBox>

          <p>
            For the first several hundred hours of exposure to English, watching is all you need. At higher levels,
            listening to audio and reading can also be helpful, but watching videos remains the main driver of learning.
            If you prefer direct interaction with speakers, methods like Crosstalk can complement your learning.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Smile className="text-primary" size={28} />
              Focus on Enjoyment, Not Analysis
            </h3>

            <p>
              When you watch, your focus should be on enjoying the videos. You do need to pay attention—listening in the
              background or while sleeping won&apos;t work—but your attention should not be on analyzing grammar,
              memorizing words, or thinking about pronunciation.
            </p>

            <div className="bg-background p-6 rounded-xl">
              <p className="mb-3">
                The input needs to be <span className="font-semibold text-accent-secondary">comprehensible</span>: you
                should understand enough to follow the story and stay engaged. At the beginning, you won&apos;t know
                most of the words—and that&apos;s okay.
              </p>
              <p>
                Pictures, drawings, and visual cues help you connect meaning to vocabulary naturally. Early videos are
                designed to teach nouns for concrete objects (house, dog, river…) and common verbs (walk, talk, see…)
                without requiring knowledge of every word.
              </p>
            </div>

            <p>
              Even at higher levels, you don&apos;t need to understand every word. Your brain will acquire what
              you&apos;re ready to learn, while other words—like function words—will become clear over time as you hear
              them repeatedly.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Target className="text-primary" size={28} />
              Choose the Right Level
            </h3>

            <p>
              Because context is so important for understanding, most learners benefit from watching slightly easier
              content than they think they need.
            </p>

            <InfoCard variant={"destructive"} title={"Important:"} icon={AlertTriangle} iconColor={"text-destructive"}>
              <p>
                If you&apos;re losing track of the story, the video is too difficult. Challenging yourself with harder
                content before you&apos;re ready can slow down progress.
              </p>
            </InfoCard>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Eye className="text-primary" size={28} />
              Do&apos;s and Don&apos;ts While Watching
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background p-5 rounded-xl">
                <p className="font-semibold text-lg mb-3 text-green-500 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Do&apos;s
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {DOS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background p-5 rounded-xl">
                <p className="font-semibold text-lg mb-3 text-destructive flex items-center gap-2">
                  <X size={20} />
                  Don&apos;ts
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {DONTS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <HighlightBox className={"text-center"}>
            <p className="text-xl font-bold mb-3">
              By following these principles, your brain will naturally acquire English through comprehensible input
            </p>
            <p className="text-lg text-muted-foreground">
              The combination of engaging stories, visual cues, and appropriate difficulty makes our videos a powerful
              tool for learning without stress or conscious study.
            </p>
          </HighlightBox>
        </div>
      </Container>
    </section>
  );
};
