import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const points = "0 1 2 3 5 8 13 21 34 55 89 144 ∞ ? ☕️".split(" ");

export const App = () => {
  const [selected, setSelected] = useState<string>(null);

  return (
    <AnimateSharedLayout>
      <nav>
        {points.map((n) => (
          <motion.button
            key={n}
            layoutId={n}
            onClick={() => setSelected(n)}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            {n}
          </motion.button>
        ))}
      </nav>
      <AnimatePresence>
        {selected && (
          <motion.button
            key={selected}
            onClick={() => setSelected(null)}
            layoutId={selected}
            className="overlay"
          >
            {selected}
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="overlay-bg"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          ></motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
