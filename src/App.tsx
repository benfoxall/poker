import React, { useState } from "react";
export const App = () => {
  const [get, set] = useState(0);

  return (
    <>
      <h1>Hello, React ({get})</h1>
      <button onClick={() => set((i) => i + 1)}>+</button>
    </>
  );
};
