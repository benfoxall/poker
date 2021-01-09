import React, { useState } from "react";

const points = "0 1 2 3 5 8 13 21 34 55 89 144 ∞ ? ☕️".split(" ");

export const App = () => {
  const [selected, setSelected] = useState<string>(null);

  return (
    <>
      <nav>
        {points.map((n) => (
          <button key={n} onClick={() => setSelected(n)}>
            {n}
          </button>
        ))}
      </nav>
      {selected && (
        <div className="overlay">
          <button onClick={() => setSelected(null)}>{selected}</button>
        </div>
      )}
    </>
  );
};
