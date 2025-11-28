// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const production = process.env.NODE_ENV === "production";

if (production) {
  Sentry.init({
    dsn: "https://3fcfd650624d2d2299c0aa8907f5c5ec@o4510441688793088.ingest.de.sentry.io/4510441691349072",

    // Add optional integrations for additional features
    integrations: [Sentry.replayIntegration()],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
  });
}

Sentry.logger.info("User triggered test log", { log_source: "sentry_test" });

export const onRouterTransitionStart = () => {
  if (production) {
    return Sentry.captureRouterTransitionStart;
  }
};
