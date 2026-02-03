import Image from "next/image";
import Link from "next/link";
import Icon404 from "@/shared/assets/404.png";
import { RoutePath } from "@/shared/constants/router";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-textColor">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <Image src={Icon404} alt="404" className="h-auto w-64 md:w-80" priority />
        <h1 className="text-3xl font-semibold md:text-4xl">You&#39;re still dreaming… just in the wrong place</h1>
        <p className="text-lg text-muted-foreground md:text-xl">This page does not exist.</p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href={RoutePath.main}
            className="w-full rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all hover:scale-102 hover:shadow-xl sm:w-auto"
          >
            Go Home
          </Link>
          <Link
            href={RoutePath.browse}
            className="w-full rounded-xl bg-accent-secondary px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-102 hover:shadow-xl sm:w-auto"
          >
            Browse Videos
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
