import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
import { VideoItem } from "@/entities/Video";
import type { ReactNode } from "react";
import type { Video } from "@prisma/client";

interface VideoCarouselProps {
  title: string;
  icon: ReactNode;
  link: string;
  videos: Video[];
  emptyMessage: string;
}

export const VideoCarousel = (props: VideoCarouselProps) => {
  const { title, link, videos, emptyMessage, icon } = props;

  return (
    <Carousel>
      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-2"}>
          {icon}
          <h3 className={"text-3xl font-bold"}>{title}</h3>
          <Link className={"text-primary"} href={link}>
            View all {">"}
          </Link>
        </div>

        <div className={"flex gap-1"}>
          <CarouselPrevious
            variant={"ghost"}
            className="hidden static lg:block translate-y-0 text-primary hover:text-primary"
          />
          <CarouselNext
            variant={"ghost"}
            className="hidden static lg:block translate-y-0 text-primary hover:text-primary"
          />
        </div>
      </div>
      {videos.length > 0 ? (
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem key={video.id} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <VideoItem video={video} />
            </CarouselItem>
          ))}
          {videos.length > 5 && (
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <Link
                href={link}
                className={"text-center w-full flex h-full justify-center items-center bg-background-muted rounded"}
              >
                View all <MdKeyboardArrowRight />
              </Link>
            </CarouselItem>
          )}
        </CarouselContent>
      ) : (
        <p className={"py-2 text-muted-foreground"}>{emptyMessage}</p>
      )}
    </Carousel>
  );
};
