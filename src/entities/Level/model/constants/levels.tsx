import Level1Icon from "@/shared/assets/level-1-icon.png";
import Level2Icon from "@/shared/assets/level-2-icon.png";
import type { Level } from "../types/types";

export const Levels: Level[] = [
  {
    id: 1,
    title: "Level 1",
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
            best materials are classes or videos where the teachers speak in the language, but make it easy to
            understand by using a lot of drawings, pictures, and gestures.{" "}
            <span style={{ color: "#ff8279" }}>Crosstalk</span> is the{" "}
            <span style={{ color: "#ff8279" }}>most efficient</span> activity that you can do, if you can find speakers
            of the language. <span style={{ color: "#ff8279" }}>Reading</span> is{" "}
            <span style={{ color: "#ff8279" }}>not recommended until</span> later on, especially if you care about
            having clear pronunciation. Practicing <span style={{ color: "#ff8279" }}>writing or speaking</span> is{" "}
            <span style={{ color: "#ff8279" }}>not recommended</span> yet.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            You mostly learn individual <span style={{ color: "#ff8279" }}>nouns</span> for{" "}
            <span style={{ color: "#ff8279" }}>concrete things</span>: car, nose, elephant. Action verbs: walk, eat,
            sing. Adjectives for simple emotions and sensations: happy, scared, cold.{" "}
            <span style={{ color: "#ff8279" }}>Adjectives</span> for physical properties: blue, tall, fat, beautiful.
            Interjections are the clearest words early on: Hey! Wow! Hi! You may learn the numbers early on, but this
            depends quite a lot on the kind of content you listen to.
          </p>
        ),
      },
    },
  },
  {
    id: 2,
    title: "Level 2",
    icon: Level2Icon,
    subtitle: "You know some common words.",
    color: "#f69ace",
    stats: {
      hoursOfInput: 50,
      knownWords: 300,
    },
    details: {
      videoCategory: "Beginner",
      whatYouCanDo: {
        text: (
          <p>
            You <span style={{ color: "#f69ace" }}>understand some common words</span>, even if you are not 100% sure
            how to pronounce them. You can now guess the meaning of some 2-word sentences, like &quot;go home&quot;, or
            &quot;eat cake&quot;. There are only a few words that you could produce yourself. For many words,
            you&rsquo;re still not sure what sounds they&rsquo;re made of.
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#f69ace" }}>Listen A LOT</span>. You are still best served with{" "}
            <span style={{ color: "#f69ace" }}>Crosstalk </span> or classes or videos where the teacher(s) speak in a
            very comprehensible way. However, with a few words under your belt you are better prepared to make the most
            of that input. Those words will help you understand the rest of the input you are listening to. Reading not
            recommended yet.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            <span style={{ color: "#f69ace" }}>More verbs</span> , since nouns help you understand them. Still mostly
            nouns and verbs for concrete things. Many expressions are learned as a chunk. You don’t know what their
            parts mean yet. Grammar for basic <span style={{ color: "#f69ace" }}> sentence order</span>. Many common
            function words will remain unclear for a long time.
          </p>
        ),
      },
    },
  },
];
