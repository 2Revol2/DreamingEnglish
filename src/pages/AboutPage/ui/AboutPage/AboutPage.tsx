import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import { Container } from "@/shared/ui/container";
import Founder from "@/shared/assets/founder.png";

export const AboutPage = () => {
  return (
    <div>
      <div className={"bg-secondary-background py-16 px-2 lg:px-0"}>
        <Container className={"max-w-4xl flex flex-col gap-2 items-center "}>
          <h3 className={"text-4xl mb-2 text-primary"}>About us</h3>
          <p className={"max-w-xl text-xl text-center text-muted-foreground"}>
            We believe fluency shouldn’t be a dream. At Dreaming, we’re building a better way to learn languages — and a
            community that proves it works.
          </p>
        </Container>
      </div>

      <Container className={"max-w-4xl flex flex-col gap-3  space-y-2 leading-relaxed py-16 px-2 lg:px-0 text-lg"}>
        <p>
          DreamingEnglish is a personal project by Maksym, a developer who struggled to improve his English using
          traditional learning methods. Like many learners, I spent years memorizing rules and vocabulary but still felt
          stuck when it came to real understanding.
        </p>
        <p>
          After discovering the comprehensible input approach, I realized there was no platform like DreamingSpanish
          focused specifically on English learners, so I decided to build one. I have been using this method for almost
          a year, and during this time I have started to feel real progress. While learning, I also noticed that
          sometimes I still couldn’t understand certain words even after hearing them many times. That’s why I added AI
          chat under each video to help clarify unknown words. My goal is to share this effective and natural way of
          learning English with everyone.
        </p>
        <p>
          DreamingEnglish is open source, so anyone can contribute. If you have ideas or suggestions, I’d love to hear
          from you.
        </p>
        <ul>
          <li className={"flex items-center gap-1 flex-wrap"}>
            <FaGithub size={20} />
            Our repo:{" "}
            <a
              className={"text-primary hover:underline"}
              target={"_blank"}
              href="https://github.com/2Revol2/DreamingEnglish"
            >
              GitHub
            </a>
          </li>
          <li className={"flex items-center gap-1 flex-wrap"}>
            <MdOutlineEmail />
            My email:
            <b>maksimbaluta02@gmail.com</b>{" "}
          </li>
        </ul>
        <p>Feel free to contact me or contribute and improve this project!</p>
      </Container>

      <div className={"bg-secondary-background py-16"}>
        <Container className={"max-w-4xl flex flex-col gap-3 items-center"}>
          <h3 className={"text-4xl mb-2 text-primary"}>Our Founder</h3>
          <Image
            src={Founder}
            alt={"Founder's photo"}
            className={"w-60 h-60 rounded-full object-contain bg-background ring-1 ring-gray-200"}
          />

          <div className={"text-center"}>
            <h4 className="text-2xl">Maksym Baluta</h4>
            <p className="text-muted-foreground text-lg">Founder & Developer</p>
          </div>
        </Container>
      </div>
    </div>
  );
};
