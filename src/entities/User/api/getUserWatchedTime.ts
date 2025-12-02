import { api } from "@/shared/api/api";

interface getWatchedTimeProps {
  date?: string;
}

interface watchedTime {
  watchedSeconds: number;
  date: string;
}

export const getUserWatchedTime = async (props: getWatchedTimeProps) => {
  const { date } = props;
  let url = `/watch`;

  if (date) {
    url += `?date=${date}`;
  }

  return await api<watchedTime[]>(url);
};
