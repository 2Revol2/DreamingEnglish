import Level1Icon from "@/shared/assets/level-1-icon.png";
import Level2Icon from "@/shared/assets/level-2-icon.png";
import Level3Icon from "@/shared/assets/level-3-icon.png";
import Level4Icon from "@/shared/assets/level-4-icon.png";
import Level5Icon from "@/shared/assets/level-5-icon.png";
import Level6Icon from "@/shared/assets/level-6-icon.png";
import Level7Icon from "@/shared/assets/level-7-icon.png";
import type { Level } from "../types/types";

export const Levels: Level[] = [
  {
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
    level: 2,
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
  {
    id: 3,
    level: 3,
    icon: Level3Icon,
    subtitle: "You can follow topics that are adapted for learners.",
    color: "#c692e2",
    stats: {
      hoursOfInput: 150,
      knownWords: 1500,
    },
    details: {
      videoCategory: "Intermediate",
      whatYouCanDo: {
        text: (
          <p>
            You can now understand people if they stay <span style={{ color: "#c692e2" }}>within certain topics</span> .
            They still need to talk to you in a way that&apos;s appropriate for you, but you know many words, and you
            don&apos;t rely exclusively on visual information.{" "}
            <span style={{ color: "#c692e2" }}> You still aren’t completely used to the sounds</span> of the language.
            You have a good intuition for basic grammar, like sentence order. You can sometimes feel it when other
            learners make mistakes. It sounds wrong somehow. You can now say quite a few words and that will already be
            useful when traveling to the country.
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#c692e2" }}>Listen A LOT</span>. Now you can listen to videos or classes in which the
            teacher doesn&apos;t use as much visual input, and may even be able to take advantage of really easy audios
            and podcasts that are catered to learners at your level.
            <span style={{ color: "#c692e2" }}>Crosstalk </span> is still the best way to spend your time. At this level
            it becomes easier than before to do crosstalk over the internet using video call software, so you won&apos;t
            need to find native speakers where you live anymore. Reading is still not recommended if you care about your
            final achievement in pronunciation, but it starts becoming possible to understand lower level graded
            readers.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            Because you are starting to get used to what the language sounds like, and what kinds of sound combinations
            to expect, you start learning words faster, without needing to hear them so many times. You learn nouns
            faster and faster. Knowing a decent amount of nouns helps you also learn more{" "}
            <span style={{ color: "#c692e2" }}>adjectives</span> . You start learning{" "}
            <span style={{ color: "#c692e2" }}>more abstract terms</span> for feelings, appearance, and more abstract
            verbs: to need, to have to, to be good at, etc. You are now getting used to more complicated grammar faster.
          </p>
        ),
      },
    },
  },
  {
    id: 4,
    level: 4,
    icon: Level4Icon,
    subtitle: "You can understand a person speaking to you patiently.",
    color: "#7e87e1",
    stats: {
      hoursOfInput: 300,
      knownWords: 3000,
    },
    details: {
      videoCategory: "Intermediate",
      whatYouCanDo: {
        text: (
          <p>
            You&apos;re at the intermediate level! You can understand a{" "}
            <span style={{ color: "#7e87e1" }}>patient</span> native speaker. You still miss some words, but the speaker
            can explain their meaning to you without resorting to translation. You can{" "}
            <span style={{ color: "#7e87e1" }}>understand a range of daily topics</span> understand a range of daily
            topics without visual support like drawings or pictures. The sounds of the language are becoming clearer
            now, and you are getting used to how the sounds are likely to be combined. That helps with retaining new
            words. If you tried speaking at a store, you could get your point across most of the time, but you still
            struggle producing even some basic words. Making friends in the language is now possible, but you need to
            find people who are quite patient, because not everybody will want to make that effort. Depending on your
            tolerance for getting negative reactions, you may want to wait a bit longer before speaking.
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#7e87e1" }}>Listen A LOT</span>. You can understand videos or classes in which the
            teacher doesn&apos;t use any visual cues, and can now benefit from listening extensively to{" "}
            <span style={{ color: "#7e87e1" }}>audios and podcasts</span> for learners everywhere you go, anytime you
            can. Crosstalk is still the best, most efficient way to improve. You can now make friends with whom you
            communicate only in the target language. While you will learn a lot when listening to people speak to you,
            <span style={{ color: "#7e87e1" }}>
              speaking this early will invariably result in hard-to-fix non-native pronunciation, noticeably bad
              grammar, and poor word usage
            </span>{" "}
            . If you really want to start having conversations with people it&apos;s recommended that you don&apos;t try
            to actively practice grammar or vocabulary, but rather speak in single words or simple sentences that come
            to mind easily. Reading is still not recommended if you care about your final achievement in pronunciation.
            By now you could understand slightly more difficult books, but still mostly just graded readers.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            Surprisingly, in this phase you learn many <span style={{ color: "#7e87e1" }}>common function words</span>{" "}
            that are taught right at the beginning of most language courses. These words are used very frequently, but
            carry very little meaning. For example: the verb &quot;to be&quot; (or equivalent), prepositions (in, at,
            on), conjunctions (therefore, so, and), and even some pronouns. Once you become aware of a new word,
            you&apos;ll encounter it everywhere. At this point you may start{" "}
            <span style={{ color: "#7e87e1" }}>
              feeling that there are many more words that you don&apos;t know than words you do know
            </span>{" "}
            . The exposure to less controlled speech allows you to notice many new words. Don&apos;t worry, you&apos;ll
            eventually also acquire those words the same way you acquired all the words you have learned until now. By
            this point you are full on acquiring all kinds of vocabulary, both concrete and abstract.
          </p>
        ),
      },
    },
  },
  {
    id: 5,
    level: 5,
    icon: Level5Icon,
    subtitle: "You can understand native speakers speaking to you normally.",
    color: "#8fd1e1",
    stats: {
      hoursOfInput: 600,
      knownWords: 5000,
    },
    details: {
      videoCategory: "Intermediate/advanced",
      whatYouCanDo: {
        text: (
          <p>
            You can understand people well when they speak directly to you. They{" "}
            <span style={{ color: "#8fd1e1" }}>won’t need to adapt their speech for you</span>. Understanding a
            conversation between native speakers is still hard. You’ll almost understand TV programs in the language,
            because you understand so many of the words, but they are still hard enough to leave you frustrated or
            bored. <span style={{ color: "#8fd1e1" }}>Conversation can be tiresome</span>, and if you try to speak you
            can feel a bit like a child, since it will be hard to express abstract concepts and complex thoughts. You
            understand most of the words used during daily conversation, but you still can’t use many yourself. If you
            try to speak the language, it will feel like you are missing many important words. However, you can, often,
            already speak with the correct intonation patterns of the language, without knowing why, and even make a
            distinction between similar sounds in the language when you say them out loud.
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#8fd1e1" }}>Listen A LOT</span>. You&apos;ll be able to understand more advanced
            materials for learners. Listen to <span style={{ color: "#8fd1e1" }}> audios and podcasts</span> daily if
            you want to learn fast. <span style={{ color: "#8fd1e1" }}>Crosstalk</span> is still as good as always. You
            may start feeling you are not getting much out of getting input about daily life topics. Try getting input
            about new topics. <span style={{ color: "#8fd1e1" }}>Easier TV programs and cartoons</span> should be
            accessible too. The purists who want to get really close to a native speaker and get a really good accent
            may still want to hold off on speaking and reading for a little more, but if you do start speaking and
            reading it&apos;s not a big deal by this point. You&apos;ll still end up with better pronunciation and
            fluency than the vast majority of learners. If you want to start reading, by this point you&apos;ll be able
            to understand books targeted at children of lower grade levels, and you can skip over graded readers. If you
            start reading, try setting every gadget you own (PC, phone, Google and Facebook settings, etc.) to the
            target language, and following speakers of the language on social media.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            This level <span style={{ color: "#8fd1e1" }}>can feel frustratingly similar to the previous one</span> .
            You will still feel that there are many more words that you don&apos;t know than words you do know.
            You&apos;ll now feel many more instances of finally understanding that word that you have been hearing since
            forever. It may feel like these words are infinite, but no! Continue doing what you are doing and
            you&apos;ll little by little fill in all the missing gaps. For some words, you’ll even wonder why you hadn’t
            learned such a basic word yet. Learning abstract words (democracy, absence, patience) will be your bread and
            butter, as will be learning more and more grammatical connectors. At this level you’ll{" "}
            <span style={{ color: "#8fd1e1" }}>mostly finish up the grammar</span> and the different sentence types.
            While still not being able to make the most complex sentences yourself, you’ll become able to understand
            almost every type of sentence.
          </p>
        ),
      },
    },
  },
  {
    id: 6,
    level: 6,
    icon: Level6Icon,
    subtitle: "You are comfortable with daily conversation.",
    color: "#58cb8f",
    stats: {
      hoursOfInput: 1000,
      knownWords: 7000,
    },
    details: {
      videoCategory: "Advanced",
      whatYouCanDo: {
        text: (
          <p>
            You can really <span style={{ color: "#58cb8f" }}>have fun</span> with the language at this point. You are{" "}
            <span style={{ color: "#58cb8f" }}>conversationally fluent</span> for daily purposes of living in the
            country and you can get by at the bank, at the hospital, at the post office, or looking for an apartment to
            rent. In spite of that odd word that is not quite there when you need it, you can{" "}
            <span style={{ color: "#58cb8f" }}>always manage to get your point across</span> in one way or another, and
            by now you are already <span style={{ color: "#58cb8f" }}>making complex longer phrases</span> . At this
            level, for the first time, you start feeling like you are actually thinking about what you want to say, and
            not about how you want to say it, even though you may fall back on thinking about how you say things,
            especially in stressful situations or when feeling self-conscious. Using humor in the language is much
            easier now. You can <span style={{ color: "#58cb8f" }}> understand TV shows</span> about daily life quite
            well (80 to 90%). Shows about families, friends, etc. Unscripted shows will usually also be easier to
            understand than scripted shows, as long as they are not too chaotic or rely too much on cultural knowledge.
            Thrillers and other genres will still be hard.
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#58cb8f" }}>Listen and read A LOT</span>. It&apos;s also a good idea to get{" "}
            <span style={{ color: "#58cb8f" }}>massive input</span> in authentic media, be it{" "}
            <span style={{ color: "#58cb8f" }}>TV</span>, <span style={{ color: "#58cb8f" }}>podcasts</span>, radio,
            movies, etc. If you can&apos;t find a lot of easy media in the target language, you may find that videos and
            audios for learners are still more efficient for acquiring new vocabulary until you get a bit better. If
            your target language has many common words with a language you already know you may be able to understand
            quite well things like TED talks and university lectures.{" "}
            <span style={{ color: "#58cb8f" }}>Lots of reading</span> is also recommended if you want to be literate and
            if you care about reading. You&apos;ll still want to read books that are targeted at elementary school
            children, although maybe you don&apos;t need to stick to the lower grades.{" "}
            <span style={{ color: "#58cb8f" }}>Nonfiction will often be much easier</span> to understand than fiction.
            By this point, speaking and reading are completely unrestricted, and it&apos;s really encouraged to{" "}
            <span style={{ color: "#58cb8f" }}>make friends in the language</span>. If you live in the country, join as
            many social activities as you can. Live in a shared apartment, go to bars, join dance classes, a sports
            team, anything! Set your PC, phone, and all your online profiles to your target language. Make a list of
            daily things you do in your own language, and find alternatives to do them in your target language.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            You may find the odd common word that you haven&apos;t learned yet, but by now your known vocabulary pretty
            much covers everything that you will usually want to say during everyday conversation. If you make friends
            and have real conversations, or watch certain TV shows, you will now be learning a lot of{" "}
            <span style={{ color: "#58cb8f" }}>slang</span>. By now, your knowledge will cover most sentence structures
            and grammatical words, so you will rarely learn these anymore, unless they are specific to certain registers
            of the language. You will mostly{" "}
            <span style={{ color: "#58cb8f" }}>learn specific vocabulary used in formal speech or in writing</span>.
            Most words that you learn now will be words that are used in more formal registers of speech like in the
            news, words used in formal writing, literary writing, or technical terms used in the specific fields that
            you are interested in: politics, technology, science, or 13th century woodblock prints. If your language
            doesn’t share a lot of its specialized vocabulary with your new language, you may still have to work on this
            for a long while.
          </p>
        ),
      },
    },
  },
  {
    id: 7,
    level: 7,
    icon: Level7Icon,
    subtitle: "You can use the language effectively for all practical purposes.",
    color: "#ff552d",
    stats: {
      hoursOfInput: 1500,
      knownWords: "12000+",
    },
    details: {
      videoCategory: "Advanced",
      whatYouCanDo: {
        text: (
          <p>
            <span style={{ color: "#ff552d" }}>You can understand any general content effortlessly, including</span>{" "}
            newspapers, novels, and all types of TV shows and movies. You might still struggle with technical texts in
            unfamiliar fields, heavy regional slang, and shows with intricate plots.{" "}
            <span style={{ color: "#ff552d" }}>You speak fluently and effortlessly</span> , without thinking about the
            language. While native speakers might still detect a slight accent, your clarity and fluidity make your
            speech easy to understand, and no one considers you a learner anymore. You may still make some mistakes, or
            miss a specific word here and there, but it doesn’t hinder you from being an{" "}
            <span style={{ color: "#ff552d" }}>effective member of society</span> .
          </p>
        ),
      },
      whatYouNeedToDo: {
        text: (
          <p>
            <span style={{ color: "#ff552d" }}>Listen and read A LOT</span> . Add variety to what you read and listen
            to. By this point it&apos;s easy to find media in the target language that you understand very well, but
            it&apos;s also <span style={{ color: "#ff552d" }}>easy to get comfortable and not seek new challenges</span>
            . If you want to continue improving, simply{" "}
            <span style={{ color: "#ff552d" }}>do things that you have never done before</span> . Try reading a book by
            a new author, try watching a show about a topic that you&apos;re unfamiliar with (about space, about the
            Middle Ages, about lawyers, etc). If you live in the country,{" "}
            <span style={{ color: "#ff552d" }}>try joining activities that are new to you</span> : a sports team, an
            improv group, comedy nights, etc.
          </p>
        ),
      },
      whatYouAreLearning: {
        text: (
          <p>
            You will continue learning <span style={{ color: "#ff552d" }}>slang</span> , and learning about the culture,
            and that will allow you to understand more and more cultural references. You can explore{" "}
            <span style={{ color: "#ff552d" }}>other regional dialects</span> of the language, ancient literary versions
            of the language, or vocabulary in other{" "}
            <span style={{ color: "#ff552d" }}>technical or scientific fields</span> that you may want to learn about.
            You will still encounter <span style={{ color: "#ff552d" }}>new idioms and proverbs</span> , but they will
            almost always be clear from the context. And of course, you can start learning your next language! 🚀
          </p>
        ),
      },
    },
  },
];
