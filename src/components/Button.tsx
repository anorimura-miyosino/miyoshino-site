"use client";

import { ReactNode, CSSProperties } from "react";
import { useRouter } from "next/navigation";

export type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties; // スタイルプロパティを追加
};

const Button = ({
  href,
  children,
  className = "",
  onClick,
  style,
}: ButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) onClick();
    router.push(href);
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "0.rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.9rem",
    transition: "background-color 0.2s",
    ...style, // 渡されたスタイルでオーバーライド
  };

  return (
    <button
      type="button"
      className={`btn-primary ${className}`}
      style={buttonStyle}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
