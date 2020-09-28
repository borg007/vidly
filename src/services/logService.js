// import * as Sentry from "@sentry/react";

function init() {
  /* Sentry.init({
    dsn:
      "https://c48835bdcca144759619df8c025ef788@o451133.ingest.sentry.io/5437281",
    release: "httpapp@" + process.env.npm_package_version
  }); */
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default { init, log };
