import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import {render} from "../web_modules/react-dom.js";
import {App} from "./App.js";
render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
