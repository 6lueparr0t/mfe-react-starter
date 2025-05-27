// packages/ui/src/components/Button.tsx
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
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
        ...rest.style, // 커스텀 스타일도 허용
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
