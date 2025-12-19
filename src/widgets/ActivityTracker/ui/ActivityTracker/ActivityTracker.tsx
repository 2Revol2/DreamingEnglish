import { useMemo } from "react";
import { useUserWatchedTime } from "@/entities/User";
import { Calendar } from "@/shared/ui/calendar";
import { secondsToHours } from "@/shared/lib/secondsToHours/secondsToHours";
import { secondsToMinutes } from "@/shared/lib/secondsToMinutes/secondsToMinutes";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

export const ActivityTracker = () => {
  const { data } = useUserWatchedTime();

  const dates = useMemo(() => {
    if (!data) return {};

    return data.reduce(
      (acc, item) => {
        acc[item.date] = item.watchedSeconds;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [data]);

  return (
    <div className={"bg-secondary-background rounded-xl p-7 flex-1 flex lg:flex-row flex-col"}>
      <div className={"flex-1"}>
        <h5 className={"font-bold text-2xl"}>Your activity</h5>
      </div>
      <div className={"flex-1"}>
        <Calendar
          showOutsideDays={false}
          mode="single"
          className={"bg-secondary-background"}
          components={{
            DayButton: (props) => {
              const { day, ...buttonProps } = props;
              if (day.outside) return <div className={"h-10 w-10"} />;

              const normalizedDay = day.isoDate.split("-")[2];
              const watchedSeconds = dates[day.isoDate];

              const hours = secondsToHours(watchedSeconds);
              const minutes = secondsToMinutes(watchedSeconds);

              const today = new Date();
              const currentDay = new Date(day.isoDate);

              const isFuture = currentDay > today;

              return (
                <Button
                  {...buttonProps}
                  className={cn(
                    "flex flex-col lg:h-14 lg:w-14 w-10 h-10 items-center rounded-md px-1 pointer-events-none",
                    watchedSeconds && "bg-orange-100",
                    isFuture && "text-gray-400",
                  )}
                  variant={"ghost"}
                >
                  <span>{normalizedDay}</span>
                  {!isFuture && watchedSeconds && (
                    <span className={"text-[10px] text-primary"}>
                      {hours}h {minutes}m
                    </span>
                  )}
                </Button>
              );
            },
          }}
        />
      </div>
    </div>
  );
};
