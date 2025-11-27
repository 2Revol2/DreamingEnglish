import { api } from "../api";

interface getWatchedTimeProps {
  userId: string;
  date?: string;
}

interface watchedTime {
  watchedSeconds: number;
  date: string;
}

export const getWatchedTime = async (props: getWatchedTimeProps) => {
  const { userId, date } = props;
  let url = `/watch?userId=${userId}`;

  if (date) {
    url += `&date=${date}`;
  }

  return await api<watchedTime[]>(url);
};
