// apps/remote1/src/components/Button.tsx
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{ padding: "10px", background: "skyblue" }}
      onClick={() => setCount((count) => count + 1)}
    >
      🌈 Remote Button Count: {count}
    </button>
  );
};

export default Button;
