import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { page } from "vitest/browser";
import Level1Icon from "@/shared/assets/level-1-icon.png";
import { LevelCard } from "./LevelCard";

const level = {
  id: 1,
  level: 1,
  icon: Level1Icon,
  subtitle: "Starting from zero.",
  color: "#ff8279",
  stats: {
    hoursOfInput: 0,
    knownWords: 0,
  },
  details: {
    videoCategory: "Superbeginner",
    whatYouCanDo: {
      text: (
        <p>
          The sounds of the language sound weird to your ears. You can`t tell many of those sounds apart from each
          other. When hearing the language, it’s hard for you to know when one word ends and when the next one begins.
          Even when you guess what a sentence means, many times you can’t guess at the meaning of the different parts.
          You can`t say any words and be confident that a native speaker would understand you.
        </p>
      ),
    },
    whatYouNeedToDo: {
      text: (
        <p>
          <span style={{ color: "#ff8279" }}>Listen A LOT</span>. The listening needs to be very comprehensible. The
          best materials are classes or videos where the teachers speak in the language, but make it easy to understand
          by using a lot of drawings, pictures, and gestures. <span style={{ color: "#ff8279" }}>Crosstalk</span> is the{" "}
          <span style={{ color: "#ff8279" }}>most efficient</span> activity that you can do, if you can find speakers of
          the language. <span style={{ color: "#ff8279" }}>Reading</span> is{" "}
          <span style={{ color: "#ff8279" }}>not recommended until</span> later on, especially if you care about having
          clear pronunciation. Practicing <span style={{ color: "#ff8279" }}>writing or speaking</span> is{" "}
          <span style={{ color: "#ff8279" }}>not recommended</span> yet.
        </p>
      ),
    },
    whatYouAreLearning: {
      text: (
        <p>
          You mostly learn individual <span style={{ color: "#ff8279" }}>nouns</span> for{" "}
          <span style={{ color: "#ff8279" }}>concrete things</span>: car, nose, elephant. Action verbs: walk, eat, sing.
          Adjectives for simple emotions and sensations: happy, scared, cold.{" "}
          <span style={{ color: "#ff8279" }}>Adjectives</span> for physical properties: blue, tall, fat, beautiful.
          Interjections are the clearest words early on: Hey! Wow! Hi! You may learn the numbers early on, but this
          depends quite a lot on the kind of content you listen to.
        </p>
      ),
    },
  },
};

describe("LevelCard", () => {
  it("LevelCard looks correct", async () => {
    render(<LevelCard level={level} />);
    await expect(page.getByTestId("level-card")).toMatchScreenshot();
  });
});
