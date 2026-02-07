import { AlertTriangle, ArrowRight, CheckCircle, X } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { SectionHeader } from "@/shared/ui/section-header";
import { InfoCard } from "@/shared/ui/info-card";
import { HighlightBox } from "@/shared/ui/highlight-box";
import { BRAIN_CONNECTIONS, DONT_NEED_ITEMS, INPUT_PRINCIPLES } from "../../model/constants/constants";

export const ComprehensibleInputSection = () => {
  return (
    <section className="py-10">
      <Container className="max-w-4xl">
        <SectionHeader
          title={"Comprehensible Input: The Key to Learning Naturally"}
          highlightedWord={"The Key to Learning Naturally"}
        />

        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            The concept of Comprehensible Input is fundamental for understanding how we acquire languages. Introduced by
            Dr. Stephen Krashen as part of his Input Hypothesis, this idea has been supported by decades of research. It
            shows that receiving comprehensible input is not only necessary for learning a language, but also
            sufficient—and often faster and more effective than traditional study methods.
          </p>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold">What Is Comprehensible Input?</h3>
            <p>
              We receive comprehensible input when we understand messages through listening or reading (or watching in
              the case of sign languages). This is what &quot;input&quot; means—listening and reading only. Speaking,
              writing, or doing exercises is considered &quot;output,&quot; not input.
            </p>
            <InfoCard variant={"bordered"} className={"border-accent-secondary"}>
              <p>
                The <span className="font-semibold text-accent-secondary">&quot;comprehensible&quot;</span> part means
                that the content is understandable enough to make sense of the message, even if you don&apos;t know
                every word or grammar rule. By understanding the general idea, your brain can naturally figure out the
                rest from context.
              </p>
            </InfoCard>
            <p>
              When you receive comprehensible input, your brain is ready to acquire language naturally, without needing
              to study vocabulary lists, memorize grammar, or practice endlessly. Simply listening or reading is enough.
              Research also shows that this ability to acquire language remains active even in adults, and we can
              greatly benefit from imitating the way children learn their first language.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">How Language Acquisition Works in the Brain</h3>
            <p>
              Dr. J. Marvin Brown expanded Krashen&apos;s ideas into a practical classroom method called ALG (Automatic
              Language Growth) in the 1980s. This framework explains why some people have stronger accents, the benefits
              of delaying speech, and why relying on explicit learning (like grammar drills) can be less effective. It
              even helps explain how creole languages form.
            </p>

            <HighlightBox>
              <p className="font-medium mb-3">
                According to this framework, language acquisition happens through connections in the brain:
              </p>
              <ul className="space-y-2">
                {BRAIN_CONNECTIONS.map((connection) => (
                  <li className="flex items-start gap-2" key={connection}>
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>{connection}</span>
                  </li>
                ))}
              </ul>
            </HighlightBox>

            <InfoCard
              variant={"destructive"}
              icon={AlertTriangle}
              title={"The Wrong Approach:"}
              iconColor={"text-destructive"}
            >
              <p>
                If instead you focus on translations, grammar study, or early forced speech, your brain forms different
                connections—ones that don&apos;t match native speakers&apos; patterns. This can make language learning
                slower and less natural.
              </p>
            </InfoCard>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Comprehensible Input Is Different</h3>
            <p>
              Our method, based on Kraken&apos;s theory, focuses entirely on listening and reading at the right level
              for you.
            </p>

            <div className="flex flex-col gap-4">
              {INPUT_PRINCIPLES.map((principle) => (
                <InfoCard
                  key={principle.title}
                  title={principle.title}
                  icon={principle.icon}
                  iconColor={principle.color}
                  description={principle.description}
                />
              ))}
            </div>

            <p className="font-medium">
              When you listen to or watch comprehensible input, your brain naturally acquires new vocabulary and grammar
              within context. This learning is deeper and more permanent than memorizing abstract lists or rules.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Learning Like a Child</h3>
            <HighlightBox>
              <p className="text-lg mb-4">
                Think back to when you were a baby: for the first year of life, you just listened to your native
                language. You didn&apos;t take notes, do exercises, or complete comprehension questions—but you learned
                a lot! Our method at Dreaming English mimics this process for adults.
              </p>
            </HighlightBox>

            <div className="grid sm:grid-cols-2 gap-4">
              {DONT_NEED_ITEMS.map((item) => (
                <InfoCard key={item} className={"text-center"}>
                  <X className="text-destructive text-4xl mb-2 mx-auto" />
                  <p className="font-semibold">{item}</p>
                </InfoCard>
              ))}
              <InfoCard className={"bg-accent-secondary-background text-center"}>
                <CheckCircle className="text-accent-secondary text-4xl mb-2 mx-auto" />
                <p className="font-semibold text-accent-secondary">Just watching and listening is enough</p>
              </InfoCard>
            </div>

            <p className="font-medium text-lg">
              This approach is proven to work. Thousands of students have successfully used Comprehensible Input methods
              to learn languages on websites like DreamingSpanish.com. Dreaming English brings this method to English
              learners, helping adults achieve natural, fluent language skills without the frustration of traditional
              study methods.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
