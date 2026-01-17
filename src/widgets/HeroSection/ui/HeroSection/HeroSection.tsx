import Link from "next/link";
import ReactPlayer from "react-player";
import { RoutePath } from "@/shared/constants/router";
import { Button } from "@/shared/ui/button";

export const HeroSection = () => {
  return (
    <section className={"flex lg:pt-20 pt-10 lg:flex-row flex-col justify-between gap-3"}>
      <div className={"flex flex-col gap-2 items-center lg:items-start"}>
        <div className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          The Natural Method
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Stop Studying. <br />
          <span className="text-primary">Start Dreaming.</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-center lg:text-start">
          Acquire English naturally by watching videos tailored to your level. No grammar drills. No vocabulary lists.
          Just pure storytelling.
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <Link href={RoutePath.browse}>
            <Button className={"rounded-3xl p-6 text-2xl"}>Start Learning Now</Button>
          </Link>
          <Link href={RoutePath.method}>
            <Button variant="ghost" className="w-full">
              How It Works
            </Button>
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground pt-2">
          No credit card required · 100% Free content available
        </p>
      </div>
      <div className="relative flex-1 z-0">
        <div className="absolute xl:rotate-3 -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-orange-500/30 blur-lg mx-2" />

        <div className="relative xl:rotate-3 overflow-hidden rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 px-4 h-10 border-b bg-background">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="aspect-video">
            <ReactPlayer src="https://www.youtube.com/watch?v=GnjL3s7p3Yw" width="100%" height="100%" controls />
          </div>
        </div>
      </div>
    </section>
  );
};
