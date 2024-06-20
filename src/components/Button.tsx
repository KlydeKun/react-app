import React from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
