import { api } from "../api";
import type { Video } from "@prisma/client";

export const getVideos = async () => (await api<Video[]>("/videos")) || [];
