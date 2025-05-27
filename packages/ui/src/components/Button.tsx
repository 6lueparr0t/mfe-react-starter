// packages/ui/src/components/Button.tsx
import * as React from "react"; // 추가해줘야 오류가 사라짐

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#0070f3",
        border: "none",
        color: "white",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
