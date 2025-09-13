import React, { ReactNode, MouseEventHandler } from "react";

interface TabButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  children: ReactNode;
  colorClass: string;
}

export const TabButton: React.FC<TabButtonProps> = ({
  onClick,
  active,
  children,
  colorClass,
}) => {
  const activeClass = active ? "" : "opacity-75"; // Dim inactive tabs slightly
  return (
    <button
      onClick={onClick}
      className={`${colorClass} ${activeClass} text-white px-4 py-2 rounded transition-all duration-200`}
    >
      {children}
    </button>
  );
};
