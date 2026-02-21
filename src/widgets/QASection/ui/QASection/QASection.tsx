import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SectionHeader } from "@/shared/ui/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import { Container } from "@/shared/ui/container";
import { QUESTIONS_AND_ANSWERS } from "../../model/constants/constants";

export const QASection = () => {
  return (
    <Container className="max-w-4xl py-5">
      <SectionHeader title={"Frequently Asked Questions"} highlightedWord={"Questions"} className={"text-center"} />
      <Accordion type={"single"} collapsible>
        {QUESTIONS_AND_ANSWERS.map(({ question, answer, value }) => {
          return (
            <AccordionItem key={question} value={value}>
              <AccordionTrigger className={"text-xl"}>{question}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground space-y-2">
                <Markdown remarkPlugins={[remarkGfm]}>{answer}</Markdown>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};
