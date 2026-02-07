import { Container } from "@/shared/ui/container";
import { HighlightBox } from "@/shared/ui/highlight-box";
import { SectionHeader } from "@/shared/ui/section-header";

export const MethodHeroSection = () => {
  return (
    <section className="lg:pt-20 pt-10">
      <Container className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          The Natural Method
        </div>
        <SectionHeader
          title={"OG Immersion & Comprehensible Input"}
          highlightedWord={"Comprehensible Input"}
          subtitle={"      Why traditional methods fail and what really works."}
        />

        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <HighlightBox>
            <p className="text-2xl font-bold mb-4">Good old immersion.</p>
            <p className="text-lg">The same way you, I, and everyone else learned our native language.</p>
          </HighlightBox>

          <p>
            Somehow, the most natural and effective way to learn a language ended up being ignored — even though
            we&apos;ve all experienced it ourselves. Instead, traditional language education took a very different path…
            and the results speak for themselves.
          </p>
        </div>
      </Container>
    </section>
  );
};
