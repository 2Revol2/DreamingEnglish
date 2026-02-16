export enum AppRoutes {
  MAIN = "main",
  PROGRESS = "progress",
  LIBRARY = "library",
  BROWSE = "browse",
  LOGIN = "login",
  ABOUT = "about",
  METHOD = "method",
  WATCH = "watch",
  WATCH_LATER = "watchLater",
  HISTORY = "history",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.BROWSE]: "/browse",
  [AppRoutes.PROGRESS]: "/browse/progress",
  [AppRoutes.LIBRARY]: "/browse/library",
  [AppRoutes.HISTORY]: "/browse/library/history",
  [AppRoutes.WATCH_LATER]: "/browse/library/watch-later",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.METHOD]: "/method",
  [AppRoutes.WATCH]: "/browse/watch/",
};
