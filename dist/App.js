import React, {useState} from "../web_modules/react.js";
import {motion, AnimatePresence, AnimateSharedLayout} from "../web_modules/framer-motion.js";
const points = "0 1 2 3 5 8 13 21 34 55 89 144 \u221E ? \u2615\uFE0F".split(" ");
export const App = () => {
  const [selected, setSelected] = useState(null);
  return /* @__PURE__ */ React.createElement(AnimateSharedLayout, null, /* @__PURE__ */ React.createElement("nav", null, points.map((n) => /* @__PURE__ */ React.createElement(motion.button, {
    key: n,
    layoutId: n,
    onClick: () => setSelected(n),
    whileHover: {scale: 1.1},
    whileTap: {scale: 1}
  }, n))), /* @__PURE__ */ React.createElement(AnimatePresence, null, selected && /* @__PURE__ */ React.createElement(motion.button, {
    key: selected,
    onClick: () => setSelected(null),
    layoutId: selected,
    className: "overlay"
  }, selected)));
};
