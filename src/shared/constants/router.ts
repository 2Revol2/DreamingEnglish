export enum AppRoutes {
  MAIN = "main",
  PROGRESS = "progress",
  LIBRARY = "library",
  WATCH = "watch",
  LOGIN = "login",
  ABOUT = "about",
  METHOD = "method",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.WATCH]: "/browse",
  [AppRoutes.PROGRESS]: "/browse/progress",
  [AppRoutes.LIBRARY]: "/browse/library",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.METHOD]: "/method",
};
