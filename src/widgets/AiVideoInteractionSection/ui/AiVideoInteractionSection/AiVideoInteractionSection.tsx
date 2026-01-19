import { Container } from "@/shared/ui/container";

export const AiVideoInteractionSection = () => {
  return (
    <section className={"lg:pt-20 pt-10 lg:pb-16 pb-8"}>
      <Container>
        <div className="space-y-3 mb-5">
          <h4 className={"text-4xl text-center"}>Interact with the video using AI</h4>
          <p className={"text-center w-full max-w-xl mx-auto  text-muted-foreground"}>
            Under every video, you can ask the AI questions about what you just watched. Get explanations, context and
            meaning - without switching apps or translating word by word.
          </p>
        </div>

        <div className={"flex flex-col gap-5"}>
          <div className="flex justify-end">
            <p className="bg-secondary-background p-3 max-w-md rounded-2xl">
              Summarize the video above in simple English
            </p>
          </div>
          <div className="flex justify-start">
            <p className="bg-secondary-background p-3 max-w-5xl rounded-2xl">
              Sure! Here’s a simple summary: <br /> The video is an English lesson set in the beautiful Canadian Rocky
              Mountains. <br /> The teacher walks around and shows you: <br /> A frozen waterfall (30 ft high, 100 ft
              wide) that was in an old movie with Marilyn Monroe. <br /> A calm river with new words like upstream,
              downstream, riverbank and pebble. <br /> Love locks on a fence, like in Korea. <br /> Big old hotels
              (Fairmont) built long ago for rich train travelers. <br /> Lake Louise – a 2.5 km long, turquoise lake
              good for canoeing in summer and ice sports in winter. <br /> Johnston Canyon – a narrow, “sketchy” trail
              with two waterfalls and colorful “ink pots,” about 2 km long. <br /> Everyday things: buying soda, water,
              meat, maple syrup; using a parking kiosk; opening recycling bins. <br /> New English words: majestic,
              chill, calm, pointy, sketchy, narrow, bustling, stoked. <br /> The teacher keeps saying: walk safely, look
              around, and use easy, clear English to describe what you see.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
