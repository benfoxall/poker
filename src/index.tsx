import React from "react";
import { render } from "react-dom";
import { App } from "./App";

render(<App />, document.getElementById("root"));

// @ts-ignore
if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
