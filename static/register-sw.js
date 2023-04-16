"use strict";
/**
 * Global util
 * Used in index.html
 */
async function registerSW() {
  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register("/static/uv-sw.js", {
    scope: __uv$config.prefix,
  });
}
