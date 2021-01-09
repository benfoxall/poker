import React from "react";
import { render } from "react-dom";
import { App } from "./App";

render(<App />, document.getElementById("root"));

// @ts-ignore
if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Keep the screen on
let wakeLock = null;
async function aquire() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (e) {
    console.log("Couldn't aquire wakeLock", e);
  }
}

document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    aquire();
  }
});

aquire();
