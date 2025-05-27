import { useState } from "react";
import { Button as UIButton } from "@mfe/ui"; // 💡 이름 변경

const RemoteButton = () => {
  const [count, setCount] = useState(0);
  return (
    <UIButton onClick={() => setCount((count) => count + 1)}>
      🌈 Remote Button Count: {count}
    </UIButton>
  );
};

export default RemoteButton;
