import Link from "next/link";
import { RoutePath } from "@/shared/constants/router";
import { Button } from "@/shared/ui/button";

export const CTASection = () => {
  return (
    <section className={"lg:py-20 py-10 flex flex-col gap-5 items-center"}>
      <div>
        <h4 className={"text-4xl text-center text-primary font-bold"}>
          Your Journey to <br /> Fluency Begins Here
        </h4>
        <p className={"text-center w-full max-w-xl mx-auto text-muted-foreground"}>
          Free. No pressure. No grammar drills.
        </p>
      </div>

      <Link href={RoutePath.browse}>
        <Button className={"rounded-3xl p-6 text-2xl"}>Start Watching Now</Button>
      </Link>
    </section>
  );
};
